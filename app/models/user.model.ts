import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true
        },
        password: String,
        role: {
            type: String,
            enum: ['ADMIN', 'USER']
        },
    },
    { timestamps: true }
)

const userModel = mongoose.model('user', userSchema);

export default userModel;
