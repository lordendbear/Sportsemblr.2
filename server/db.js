import mongoose from 'mongoose';

export default (config) => {
	mongoose.Promise = global.Promise;
	mongoose.connect(config.connectionString);

	mongoose.connection.on('error', () => {
		console.log('MongoDB connection error. Please make sure MongoDB is running.');
		process.exit();
	});
};
