import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { RefreshResponseData } from "@/logic/api/base/interfaces";
import { ERROR_TYPE } from "@/logic/constants/error";
import tokenService from "@/logic/services/TokenService";
import { TOKEN_TYPE } from "@/logic/constants/token";
import checkClientSideRender from "@/utils/checkClientSideRender";

export default abstract class BaseApi {
  private baseUrl: string = "http://localhost:3001/api";

  protected axios: AxiosInstance = axios.create({
    baseURL: `${this.baseUrl}`,
    withCredentials: true,
  });

  constructor() {
    this.initInterceptor();
  }

  private initInterceptor = (): void => {
    this.axios.interceptors.request.use(this.onFulfilledReq);
    this.axios.interceptors.response.use(
      (response) => response,
      this.onRejectRes,
    );
  };

  private onFulfilledReq = (
    response: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig => {
    if (response.headers && tokenService.accessToken) {
      response.headers["Authorization"] = "Bearer " + tokenService.accessToken;
    }

    return response;
  };

  private readonly onRejectRes = async (error: any): Promise<void> => {
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
        tokenService.accessToken = accessToken;
        return this.axios(originalRequest);
      }

      return Promise.reject(error);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  private refreshAccessToken = async (): Promise<RefreshResponseData> => {
    const isClient = checkClientSideRender();
    let config: AxiosRequestConfig | undefined = undefined;

    if (!isClient) {
      const { cookies } = await import("next/headers");
      const refreshToken = cookies().get(TOKEN_TYPE.refresh)?.value;
      config = {
        headers: {
          Cookie: `${TOKEN_TYPE.refresh}=${refreshToken}`,
        },
      };
    }

    const { data } = await axios.post<RefreshResponseData>(
      `${this.baseUrl}/refresh`,
      undefined,
      config,
    );

    return data;
  };
}
