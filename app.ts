import express from 'express';

export const app = express();

app.use((req, res, next) => {
	res.send('express');
});

app.disable('x-powered-by');
