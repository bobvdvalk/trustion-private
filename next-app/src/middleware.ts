import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLanguage, languages } from "@/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lang*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";

function detectLanguage(req: NextRequest) {
  const cookieValue = req.cookies.get(cookieName)?.value;
  if (cookieValue) {
    return acceptLanguage.get(cookieValue);
  }
  const headerValue = req.headers.get("Accept-Language");
  if (headerValue) {
    return acceptLanguage.get(headerValue);
  }
  return fallbackLanguage;
}

export function middleware(req: NextRequest) {
  const isSystemPage = req.nextUrl.pathname.startsWith("/_next");
  const isOnLocalizedPage = languages.some((lang) =>
    req.nextUrl.pathname.startsWith(`/${lang}`),
  );

  if (!isSystemPage && !isOnLocalizedPage) {
    // you're not visiting a localized page, redirecting to detected locale
    const language = detectLanguage(req);
    return NextResponse.redirect(
      new URL(`/${language}${req.nextUrl.pathname}`, req.url),
    );
  }

  return NextResponse.next();
}
