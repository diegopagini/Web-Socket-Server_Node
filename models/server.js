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
		// Sockets
		this.sockets();
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
	 * Sockets configuration.
	 */
	sockets() {
		this.io.on('connection', (socket) => {
			console.log('Client connected', socket.id);

			// Listen a custom event:
			socket.on(
				'send-msg', // needs to be the same name that is used to emit.
				(payload) => {
					// "payload" is the data sent from the frontend
					console.log(payload);
				}
			);

			socket.on('disconnect', () => console.log('Client disconnected', socket.id));
		});
	}

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
