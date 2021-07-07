const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packagejson = require('./../package.json');

const domain = process.env.PRODUCTION_NAME

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packagejson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)