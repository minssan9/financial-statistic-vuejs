const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./docker/dist"),
    devServer: {
        https: false,
        port: 8081,
        proxy: {
            "/api": {
                target: "http://localhost:54001",
                ws: true,
                changeOrigin: true
            }
        }
    }
};
