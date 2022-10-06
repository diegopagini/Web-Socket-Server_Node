/** @format */
import cors from 'cors';
import express from 'express';

export class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

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
		this.app.listen(this.port, () => {
			console.log(`server running in port: ${this.port}`);
		});
	}
}
