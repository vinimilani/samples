module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.family === "chromium" && browser.name !== "electron") {
      launchOptions.args.push(
        "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
      );
      launchOptions.args.push("--start-maximized");
      launchOptions.args.push("--disable-web-security");
    }

    if (browser.name === "chrome") {
      launchOptions.args.push("--allow-insecure-localhost");
      launchOptions.args.push("--ignore-certificate-errors");
    }

    if (browser.family === "firefox") {
      launchOptions.args.push("--arg-name");
    }

    return launchOptions;
  });
};
