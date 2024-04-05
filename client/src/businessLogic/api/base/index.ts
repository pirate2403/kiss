import axios, { AxiosInstance } from "axios";
import { RefreshResponseData } from "@/businessLogic/api/base/interfaces";
import LocalStorageService from "@/businessLogic/services/LocalStorageService";
import { TOKEN_TYPE } from "@/businessLogic/constants/token";
import { ERROR_TYPE } from "@/businessLogic/constants/error";

export default abstract class BaseApi {
  private baseUrl: string = "http://localhost:3001/api";

  protected axios: AxiosInstance = axios.create({
    baseURL: `${this.baseUrl}`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${LocalStorageService.get(TOKEN_TYPE.access)}`,
    },
  });

  constructor() {
    this.initInterceptor();
  }

  private initInterceptor(): void {
    this.axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        try {
          const originalRequest = error.config;
          const errorStatus = error.response.status;
          const errorType = error.response.data.type;

          if (
            errorStatus === 403 &&
            errorType === ERROR_TYPE.invalidAccessToken &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;
            const { accessToken } = await this.refreshAccessToken();
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + accessToken;
            return this.axios(originalRequest);
          }

          return Promise.reject(error);
        } catch (error) {
          return Promise.reject(error);
        }
      },
    );
  }

  private async refreshAccessToken(): Promise<RefreshResponseData> {
    const { data } = await axios.post<RefreshResponseData>(
      `${this.baseUrl}/refresh`,
    );

    return data;
  }
}
