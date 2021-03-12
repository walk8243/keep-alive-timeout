import http from 'http';

const server = http.createServer((req, res) => {
	setTimeout(() => {
		res.end('end');
	}, 6000);
});
server.keepAliveTimeout = 0;

server.listen(3000);
