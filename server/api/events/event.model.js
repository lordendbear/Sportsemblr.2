import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;