module.exports = {
  apps : [{
    name: "middleware",
    script: "./node_modules/.bin/moleculer-runner",
    args: "--repl /app/services /app/importers/*.js",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    env: {
      "NODE_ENV": "production",
    }
  }]
}