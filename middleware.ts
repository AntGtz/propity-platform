import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";
const subdomains = [{ subdomain: "client1" }, { subdomain: "client2" }];

export default auth((request: NextRequest) => {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  // Define allowed Domains (localhost and production domain)
  const allowedDomains = ["localhost:3000", "tudominio.com", "propity-git-development-reylans-projects.vercel.app"];

  // Verify if hostname exists in allowed domains
  const isAllowedDomain =
    hostname && allowedDomains.some((domain) => hostname.includes(domain));

  // Extract the possible subdomain in the URL
  const subdomain = hostname ? hostname.split(".")[0] : "";

  // If we stay in a allowed domain and its not a subdomain, allow the request.
  if (isAllowedDomain && !subdomains.some((d) => d.subdomain === subdomain)) {
    return NextResponse.next();
  }

  const subdomainData = subdomains.find((d) => d.subdomain === subdomain);

  if (subdomainData) {
    // Rewrite the URL in the dynamic route based in the subdomain
    return NextResponse.rewrite(
      new URL(`/${subdomain}${url.pathname}`, request.url)
    );
  }

  return new Response(null, { status: 404 });
});

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
