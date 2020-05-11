import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        role: String,
    },
    { timestamps: true }
)

const userModel = mongoose.model('user', userSchema);

export default userModel;
