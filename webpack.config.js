const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  cache: false,
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/react", "@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx"]],
          },
        },
      },
      {
        test: [/\.(png|jpg|jpeg|gif)$/],
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        use: "file-loader",
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".jpg", ".png"],
    alias: {
      "react-dom$": "react-dom/profiling",
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: { "^/": "" },
      },
    },
  },
};