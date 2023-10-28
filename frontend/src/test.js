const fs = require('fs');
const path = require('path');

// Lee el contenido del archivo index.html
const htmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

// Configura jsdom para simular el entorno del navegador
const { JSDOM } = require('jsdom');
const { document } = new JSDOM(htmlContent).window;

// Prueba la existencia de ciertos elementos HTML
test('existe el elemento root', () => {
  const rootElement = document.getElementById('root');
  expect(rootElement).toBeTruthy();
});

test('existe el elemento de descripción', () => {
  const descriptionElement = document.querySelector('meta[name="description"]');
  expect(descriptionElement).toBeTruthy();
});

test('existe el elemento del icono de Apple touch', () => {
  const appleTouchIconElement = document.querySelector('link[rel="apple-touch-icon"]');
  expect(appleTouchIconElement).toBeTruthy();
});

// Agrega más pruebas según sea necesario para los elementos que deseas verificar en tu HTML.
