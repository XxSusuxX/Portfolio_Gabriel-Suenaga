/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.cdninstagram.com'
            }
        ]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
