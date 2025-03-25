import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";

export default auth((request: NextRequest) => {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  // Define allowed Domains (localhost and production domain)
  const allowedDomains = [
    "localhost:3000",
    "propity.io",
    "propity-platform.vercel.app",
    "propity.mx",
    "propity-git-development-reylans-projects.vercel.app",
  ];

  // Verify if hostname exists in allowed domains
  const isAllowedDomain =
    hostname && allowedDomains.some((domain) => hostname.includes(domain));

  // Extract the possible subdomain in the URL
  const subdomain = hostname ? hostname.split(".")[0] : "";

  const isLocalhost = hostname?.includes("localhost");

  if (isAllowedDomain) {
    const parts = hostname.split(".").length;

    if ((isLocalhost && parts <= 1) || (!isLocalhost && parts <= 2)) {
      return NextResponse.next();
    }
  }

  if (subdomain) {
    // Rewrite the URL in the dynamic route based in the subdomain
    return NextResponse.rewrite(
      new URL(`/${subdomain}${url.pathname}`, request.url),
    );
  }

  return new Response(null, { status: 404 });
});

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
