class TokenService {
  private _accessToken: string | null =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGQ5M2ZiMzdhM2Y0YzE4NTRlMzQzZiIsIm5hbWUiOiJLaXNzIiwiZW1haWwiOiJLaXNzQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDgkdFE3MU5qUVE0ZkQ1bEh6ekFBMWo2ZWZNZE1ITnJhdEV3SjhlSmswelREcUdxTEwzTW0yNm0iLCJpYXQiOjE3MTIzMjkyOTYsImV4cCI6MTcxMjMyOTMyNn0.-JbLjPjTI_Y8bPeIfKGkqxva82w9XO-R-LBD9nH_Qfw";

  public get accessToken(): string | null {
    return this._accessToken;
  }

  public set accessToken(accessToken: string) {
    this._accessToken = accessToken;
  }

  public removeAccessToken(): void {
    this._accessToken = null;
  }
}

const tokenService = new TokenService();
export default tokenService;
