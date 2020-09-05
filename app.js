const http = require('http');
const rqListener = (req, res) => {
  console.log(req.url, req.method, req.headers);

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