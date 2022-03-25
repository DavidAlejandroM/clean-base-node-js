import mongoose from 'mongoose';

export const mongoConnection = () => {
    mongoose.set('debug', false);
    mongoose.connect('mongodb://localhost:27017/test-ucla')
};

