import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({}, {
    title: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
    },
    sport: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'advanced', 'semi-pro', 'pro']
    },
    picture: {
        type: String,
        trim: true,
    },
    peopleNeeded: {
        type: Number
    },
    peopleJoined: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['active', 'started', 'ended']
    },
    date: {
        type: Date
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalPrice: {
        type: mongoose.Schema.Types.Decimal128,

    }
},{
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;