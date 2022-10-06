/** @format */
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server as Socket } from 'socket.io';

export class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.server = createServer(this.app);
		this.io = new Socket(this.server); // Socket.io - Sockets Server

		this.paths = {};

		// Middlewares
		this.middlewares();
		// Routes
		this.routes();
	}

	/**
	 * Middlewares for the server.
	 */
	middlewares() {
		// "use" is the keyword to middlewares.
		this.app.use(express.static('public')); // To use the files in the public folder.
		this.app.use(cors()); // To allow cors.
	}

	/**
	 * Routes for the server.
	 */
	routes() {}

	/**
	 * To start de server.
	 */
	listen() {
		// Socket server.
		this.server.listen(this.port, () => {
			console.log(`server running in port: ${this.port}`);
		});
	}
}
