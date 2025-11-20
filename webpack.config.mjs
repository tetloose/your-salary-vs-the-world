import autoprefixer from 'autoprefixer'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import StylelintPlugin from 'stylelint-webpack-plugin'
import tailwindcss from 'tailwindcss'
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
                sourceMap: mode
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [tailwindcss, autoprefixer]
                },
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
        '@config': path.resolve(__dirname, 'src/config'),
        '@legacy': path.resolve(__dirname, 'src/legacy')
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
      filename: 'js/[name].[contenthash].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/templates/index.hbs',
        filename: 'index.html',
        title: 'Your Salary Vs The World | Remitly',
        author: 'Remitly',
        description:
          'Using an interactive tool, this analysis breaks down how many hours you would need to work to earn your current salary in different countries around the world.',
        url: 'https://media.remitly.io/salary-comparison-calculator/',
        canonical: 'https://www.remitly.com/gb/en/salary-comparison-calculator'
      }),
      new ESLintPlugin({
        extensions: ['ts', 'js'],
        files: 'src/**/*.{ts,js}',
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
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets/images',
            to: 'images',
            noErrorOnMissing: true
          },
          {
            from: 'src/assets/js',
            to: 'js',
            noErrorOnMissing: true
          }
        ]
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
