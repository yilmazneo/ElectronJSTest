const path = require('path')

module.exports = {
    entry: './app/jsx/app.jsx',
    output: {
        path: path.join(__dirname,'app', 'js'),
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    devServer:{
        overlay:true,
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: ['style-loader','css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },   
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }         
        ]
    }
}