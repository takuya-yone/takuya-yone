/** @type {import('next').NextConfig} */
const repositoryName = process.env.REPOSITORY_NAME ? "/" + process.env.REPOSITORY_NAME : "";

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: repositoryName,
    basePath: repositoryName,
    trailingSlash: true,
    publicRuntimeConfig: { repositoryName },

}

module.exports = nextConfig
