import autoprefixer from 'autoprefixer'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as sass from 'sass'
import StylelintPlugin from 'stylelint-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (_, argv) => {
  const mode = argv.mode === 'development'
  const currentYear = new Date().getFullYear()

  return {
    mode: mode ? 'development' : 'production',
    entry: './src/app.ts',
    devtool: mode ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          options: {
            partialDirs: [path.resolve(__dirname, 'src/components')],
            inlineRequires: /\.(png|svg|jpg|jpeg|gif|webp)$/,
            helperDirs: [path.resolve(__dirname, 'src/helpers')]
          }
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            mode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: mode
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer]
                },
                sourceMap: mode
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: mode,
                implementation: sass,
                sassOptions: {
                  quietDeps: false
                }
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash][ext]'
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.scss', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts')
      }
    },
    devServer: {
      static: './public',
      watchFiles: ['src/templates/**/*.hbs', 'src/components/**/*.hbs'],
      client: {
        overlay: {
          errors: true,
          warnings: false
        }
      }
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: mode ? 'js/[name].js' : 'js/[name].[contenthash].js',
      publicPath: '/',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/templates/index.hbs',
        filename: 'index.html',
        title: `The Immigration Index ${currentYear} | Immigration Statistics | Remitly`,
        author: 'Remitly',
        description: `Discover the best countries to immigrate to in ${currentYear}. Our Immigration Index ranks 82 countries across 24 factors including healthcare, economy, safety, and quality of life to help you make informed decisions about relocating abroad.`,
        url: 'https://www.remitly.com/us/en/landing/the-immigration-index',
        canonical:
          'https://www.remitly.com/us/en/landing/the-immigration-index',
        locale: 'en_US',
        siteName: 'Remitly'
      }),
      new ESLintPlugin({
        extensions: ['ts'],
        files: 'src/**/*.ts',
        emitWarning: true,
        failOnError: false
      }),
      new StylelintPlugin({
        files: 'src/**/*.scss',
        failOnError: false,
        emitErrors: true,
        emitWarning: true,
        lintDirtyModulesOnly: false,
        configFile: path.resolve(__dirname, 'stylelint.config.mjs')
      }),
      new MiniCssExtractPlugin({
        filename: mode ? 'css/[name].css' : 'css/[name].[contenthash].css',
        chunkFilename: mode ? 'css/[name].css' : 'css/[name].[contenthash].css'
      })
    ],
    optimization: {
      minimize: !mode,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['mozjpeg', { quality: 80 }],
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                            cleanupIds: false
                          }
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        })
      ]
    }
  }
}
