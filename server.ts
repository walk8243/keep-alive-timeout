import http from 'http';
import { app } from './app';

const server = http.createServer(app);
server.keepAliveTimeout = 0;

server.listen(3000);
