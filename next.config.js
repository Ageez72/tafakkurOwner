/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'd329sg0poh8k4h.cloudfront.net',
          port: '',
          pathname: '/tafakkur-website/**'
        },
        {
            protocol: 'https',
            hostname: 'tafakkurbucket.s3.eu-west-1.amazonaws.com',
            port: '',
            pathname: '/images/**'
        }]
      },
}

module.exports = nextConfig
