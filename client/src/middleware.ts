import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/logic/constants/routes";
import { TOKEN_TYPE } from "@/logic/constants/token";

function isAuthRoute(url: string): boolean {
  return url.includes(ROUTES.login) || url.includes(ROUTES.register);
}

function isMainRoute(url: string): boolean {
  const path = url.charAt(url.length - 1);
  return path === ROUTES.main;
}

export function middleware(request: NextRequest): NextResponse {
  const { url, cookies, integrity } = request;

  const hasToken = !!cookies.get(TOKEN_TYPE.refresh);
  const isAuthPage = isAuthRoute(url);
  const isMainPage = isMainRoute(url);

  if (!isAuthPage && !hasToken) {
    return NextResponse.redirect(new URL(ROUTES.login, url));
  }

  if ((isAuthPage && hasToken) || isMainPage) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|kiss.svg).*)"],
};
