require("v8-compile-cache");
const { app } = require("electron");
const { initSplash } = require("./src/windows/splash");
const { initResourceSwapper } = require("./src/addons/swapper");

app.on("ready", () => {
  initSplash();
  initResourceSwapper();
});

app.on("window-all-closed", () => app.quit());
