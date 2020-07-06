const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const doDev = process.env.NODE_ENV !== 'production';
const doMode = doDev ? 'development' : 'production';

const dllPath = path.join(__dirname, 'public/dll');

module.exports = {
    //target: 'web',
    mode: doMode,
    entry: {
        //element: ['./public/js/element.js'],
        //Vue: ["./public/js/vue.js"],
        //VueRouter: ["vue-router"],
        axios: ["./public/js/axios.js"],
        element_style: ['./public/css/element.css'],
        public_style: ['./public/css/reset.css', './public/css/common.css']
    },
    output: {
        path: dllPath,
        filename: 'js/[name].dll.' + (doDev ? '' : 'min') + '.js',
        library: '[name]',
        libraryTarget: 'var',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    /*{
                        loader: 'thread-loader',
                        options: WorkerPool
                    },*/
                    /**
                     * babel-loader
                     * @description
                     */
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 version'] //具体可以去babel-preset里面查看
                                    }
                                }]
                            ]
                        },
                    }
                ],
                exclude: /((sc|sa|le|c)ss\/.*)|(node_modules\/.*)/
            },
            {
                test: /\.(sa|sc|c|le)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 公共路径
                            // 默认情况下，使用的是webpackOptions.output中publicPath
                            publicPath: './',
                            //开发环境配置热更新
                            minimize: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: false,
                            //localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'imgs/[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        // 清理生成文件夹
        new CleanWebpackPlugin({
            dry: false, // 模拟删除，用来测试，false 则真的删除
            verbose: true
            //cleanOnceBeforeBuildPatterns: ['**/*', '!analogdataImgs', '!analogdataImgs/**/*']
        }),
        /**
         * DllPlugin
         * @description
         * @param name {string} 要与 output.library 保持一致
         */
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, 'public/dll', '[name]-manifest.json')
        }),
        // 分离css
        new MiniCssExtractPlugin({
            // 分离文件路径
            filename: doDev ? 'css/[name].dll.css' : 'css/[name].dll.min.css',
            chunkFilename: doDev ? 'css/[id].dll.css' : 'css/[name].dll.min.css'
        }),
        /*new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),*/
        /**
         * FixStyleOnlyEntriesPlugin
         * @description 以 css 为入口文件时，会输出多余的 js 文件，删之
         */
        new FixStyleOnlyEntriesPlugin(),
        /*new MinifyPlugin({
            removeConsole: true,
            removeDebugger: true,
        }, {
            comments: false,
            sourceMap: false,
        }),*/
    ],

    optimization: {
        minimizer: [
            /*new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log']
                    },
                    mangle: false,
                },
                test: /\.js(\?.*)?$/i,  //测试匹配文件,
                cache: true,//缓冲
                sourceMap: false,//源码调试
                parallel: true,//多进程并行运行
                extractComments: false, //禁止构建注释
            }),*/
            /**
             * OptimizeCSSAssetsPlugin
             * @description 对 css 文件进行压缩和优化
             * @param assetNameRegExp {string} 正则表达式，指示应优化\最小化的资产的名称。
             * @param cssProcessor {object} 优化\最小化CSS的CSS处理器
             * @param canPrint {boolean}  指示插件是否可以将消息打印到控制台
             * @param cssProcessorOptions 如果是生产环境，一定要设值为 false，以取消掉 map 之类
             * @param cssProcessorOptions.safe {boolean}  避免 cssnano 重新计算 z-index
             * @param cssProcessorOptions.autoprefixer {boolean} cssnano 自身集成 autoprefixer 功能，清理无关前缀的需要关闭 autoprefixer，转用 postcss 的 autoprefixer
             * @param cssProcessorOptions.map.inline {boolean} 不生成内联映射,这样配置就会生成一个source-map文件
             * @param cssProcessorOptions.map.annotation {boolean} css文件添加source-map路径注释
             */
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g,
                cssProcessor: require('cssnano'),
                canPrint: true,
                cssProcessorOptions: false
            })
        ],
        splitChunks: {
            cacheGroups: {
                /* elementScript: {
                     name: 'elementjs',
                     chunks: 'async',
                     priority: 10,
                     reuseExistingChunk: true,
                     enforce: true
                 },*/
                /*elementStyles: {
                    name: 'element_ui',
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                },
                commonStyles: {
                    name: 'public_style',
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: false
                }*/
            }
        }/*,
        runtimeChunk: {
            "name": "manifest"
        },*/
    }
}