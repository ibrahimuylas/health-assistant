const http = require('http');
const app = require('./src/app.js');
const config = require('./src/configuration/config.json');

const port = process.env.port || config.port;
const server = http.createServer(app);

server.setTimeout(config.timeout)
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});