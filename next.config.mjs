/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Mantén la optimización de imágenes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce-images-bucket-20-304-8.s3.amazonaws.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; object-src 'none';",
          // },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevenir que la página sea embebida en iframes
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Evitar la detección de tipo MIME
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer", // Controlar la política de referencia
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // Seguridad de transporte estricta
          },
        ],
      },
    ];
  },
};

export default nextConfig;
