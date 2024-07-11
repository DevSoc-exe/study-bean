import { NextResponse, NextRequest } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJWTPayload extends JwtPayload {
  email?: string;
  user_id?: string;
  username?: string;
}

export function middleware(request: NextRequest) {
  const authTokenFromCookie = request.cookies.get("Authorization")?.value;

  if (!authTokenFromCookie) {
    console.log("Unautherized, routing to /auth");
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  try {
    const path = request.nextUrl.pathname;

    let pathSections: string[] = [];
    let usernameFromParams: string = "";
    if (path != "") {
      pathSections = path.split("/");
      if (pathSections[1] == "user") {
        usernameFromParams = pathSections[2];
      }
    }

    const userToken = authTokenFromCookie.split("Bearer+")[1];
    const decodedToken = jwtDecode<CustomJWTPayload>(userToken);
    // const email = decodedToken ? (decodedToken.email as string) : "";
    // const userId = decodedToken ? (decodedToken.user_id as string) : "";
    const username = decodedToken ? (decodedToken.username as string) : "";

    if (username != usernameFromParams) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  } catch (err) {
    console.log("Here, found an error", err);
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}
export const config = {
  matcher: ["/user/:path*/todos", "/user/:path*/pomodoro"],
};
