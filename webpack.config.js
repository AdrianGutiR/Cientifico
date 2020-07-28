const path = require("path"); //Requerir, permite traer path, acceder hacia donde estamos en las carpetas o donde nos estamos moviendo en el proyecto.
const HtmlWebPackPlugin = require("html-webpack-plugin"); //Archivo necesario para trabajar con HTML
// const CopyWebPackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//Configuración de todo lo que va a suceder. aqui se define el modulo para exportar
module.exports = {
  entry: "./src/index.js", //Punto de entrada
  //Punto de salida, donde vamos aponer el proyecto listo para producción
  output: {
    path: path.resolve(__dirname, "dist"), // Donde se encuentre la carpeta ponemos la carpeta DIST
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        //Estructura de babel
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      injet: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contentHash].css",
    }),
  ],
};
