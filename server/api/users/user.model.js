import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({}, {
    timestamps: true
});

const User = mongoose.model('User', eventSchema);

export default User;