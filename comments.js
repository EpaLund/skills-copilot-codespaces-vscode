// Create web server
// Create a web server that listens to incoming requests on port 3000 and serves the following responses:
// 1. For requests to /, serve a page with the text "Welcome to my website!"
// 2. For requests to /about, serve a page with the text "About me"
// 3. For requests to /contact, serve a page with the text "Contact me"
// 4. For requests to any other path, serve a page with the text "404 - Page not found"

// Import the 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Check the URL of the request
  if (req.url === '/') {
    res.end('Welcome to my website!');
  } else if (req.url === '/about') {
    res.end('About me');
  } else if (req.url === '/contact') {
    res.end('Contact me');
  } else {
    res.end('404 - Page not found');
  }
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});