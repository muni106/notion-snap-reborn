const { app, BrowserWindow, shell } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      spellcheck: false
    }
  });
  win.maximize();
  win.loadURL("https://notion.so");

  // Deal with external links
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith("https://www.notion.so")) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });
});
