import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
    name: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
    },
    age: Number,
    services: {
        // facebook: String,
        // google: String,
    },
    role: {
        type: String,
        // enum: roles,
        default: 'user',
    },
    picture: {
        type: String,
        trim: true,
    },
    sports: [{ name: String, skill: Number }],
    places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
}, {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

export default User;