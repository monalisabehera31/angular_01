
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
entry: ['./src/app.js'],
output: {
path: path.join(__dirname, './dist'),
filename: 'main.bundle.js',
},
module: {
rules: [{
test: /\js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
{
test: /\.html$/,
use: [{
loader: 'html-loader',
options: {
minimize: true
}
}],
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
}

]
},
plugins: [
new HtmlWebpackPlugin({
filename: 'index.html',
template: './src/index.html'
}),
new CleanWebpackPlugin(['dist'])
]
}