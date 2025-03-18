import { createServer } from 'http';
import { parse } from 'url';

const port = process.env.PORT || 8080;
const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === '/') {
    res.writeHead(302, { Location: '/greeting' });
    res.end();
  } else if (pathname === '/greeting') {
    const name = query.name || 'World';
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello ${name}!</h1>`);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
