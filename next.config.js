/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx","ts", "tsx", "md", "mdx"]
}
