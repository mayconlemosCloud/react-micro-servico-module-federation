const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development", // ou 'production' se estiver pronta para produção
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js", // Nome do arquivo de exposição remota
      exposes: {
        "./App": "./src/App", // Caminho para o componente que você deseja expor
      },
      remotes: {
        MFE: "MFE@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};
