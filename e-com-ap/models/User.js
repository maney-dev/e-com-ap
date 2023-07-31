import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Please enter your name',
        unique: true
    },
    email: {
        type: String,
        email: Joi.string().max(50).allow(''),
        unique: true,
        validate: [{ validator: value => isEmail(value), msg: 'Email invalide.' }]
    },
    password: {
        type: String,
        required: true,
    },

    // resetPasswordToken:String,
    // resetPasswordExpires:Date,
    
}, {timestamps: true})

export default mongoose?.models.User || mongoose.model("User", UserSchema)