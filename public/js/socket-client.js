/** @format */

// HTML references.
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const socket = io(); // To start connection with socket.

/**
 * connect event.
 */
socket.on('connect', () => {
	console.log('Connected');

	lblOffline.style.display = 'none';
	lblOnline.style.display = 'inline-block';
});

/**
 * disconnect event.
 */
socket.on('disconnect', () => {
	console.log('Disconnected');

	lblOffline.style.display = 'inline-block';
	lblOnline.style.display = 'none';
});
