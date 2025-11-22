import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import StylelintPlugin from 'stylelint-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (_, argv) => {
  const mode = argv.mode === 'development'

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
            partialDirs: [path.resolve(__dirname, 'src/components')]
          }
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: mode,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: mode
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
      extensions: ['.ts', '.js', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@config': path.resolve(__dirname, 'src/config')
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
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/templates/index.hbs',
        filename: 'index.html',
        title: 'The Immigration Index | Remitly',
        author: 'Remitly',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url: 'https://media.remitly.io/salary-comparison-calculator/',
        canonical: 'https://www.remitly.com/gb/en/salary-comparison-calculator'
      }),
      new ESLintPlugin({
        extensions: ['ts'],
        files: 'src/**/*.ts',
        emitWarning: true,
        failOnError: false
      }),
      new StylelintPlugin({
        files: 'src/**/*.css',
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
