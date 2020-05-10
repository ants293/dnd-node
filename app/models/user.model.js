module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            username: String,
            email: String,
            password: String,
            role: String,
        },
        { timestamps: true }
    );

    return mongoose.model("user", schema);
}