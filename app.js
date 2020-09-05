const http = require('http');
const rqListener = (req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<html>');
    res.write('<body><form action="/message" methed="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>');
  res.write('<h1>Node Js</h1>');
  res.write('<p>I started to learn Node Js today.</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

const server = http.createServer(rqListener);

server.listen(3000);