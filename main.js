const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let addWindow;

//  Listen for app to be ready
app.on('ready', () => {
  // Create new Window
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle create add window
function createAddWindow() {
  // Create new window
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add Shopping List Item',
  });
  // Load html into window
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true,
  }));
}

// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Item',
        click: () => {
          createAddWindow();
        },
      },
      {
        label: 'Clear Items',
      },
      {
        label: 'Quit',
        // How to write behavior of "role: 'quit'"
        // accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        // click: () => {
        //   app.quit();
        // },
        role: 'quit',
      },
    ],
  },
];