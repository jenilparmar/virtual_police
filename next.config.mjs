/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://virtual-police.vercel.app/" }, // specify one origin here
                    { key: "Access-Control-Allow-Origin", value: "192.168.242.141:3000/map" }, // specify one origin here
                    { key: "Access-Control-Allow-Origin", value: "/" }, // specify one origin here
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, // or use a single string for multiple origins
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
