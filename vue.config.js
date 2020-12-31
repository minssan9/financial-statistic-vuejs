const path = require('path');

module.exports = {
    // chainWebpack: config => {
    //     config.module
    //         .rule('vue')
    //         .use('vue-loader')
    //         .loader('vue-loader')
    // },
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "localhost/fn/testapi",
                ws: true,
                changeOrigin: true
            }
        }
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}