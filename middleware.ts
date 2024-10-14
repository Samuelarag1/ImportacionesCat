// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Usar get para obtener el valor de la cookie
  let userRole: string | null = null;

  if (token) {
    try {
      // Decodificar el token JWT
      const decoded = JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString("utf-8")
      );
      userRole = decoded.role;
    } catch (error) {
      console.error("Token inválido", error);
      return NextResponse.redirect(new URL("/profile", req.url)); // Redirigir si el token no es válido
    }
  }

  const { pathname } = req.nextUrl;

  // Verificar si la ruta es de administración
  if (pathname.startsWith("/admin")) {
    // Si no se encuentra el rol o no es admin, redirigir
    if (userRole !== "admin") {
      return NextResponse.redirect(new URL("/profile", req.url));
    }
  }

  // Permitir el acceso si es admin o si no está en una ruta protegida
  return NextResponse.next();
}

// Definir las rutas donde quieres aplicar el middleware
export const config = {
  matcher: ["/admin/:path*"], // Aplica el middleware solo a las rutas que comienzan con /admin
};
