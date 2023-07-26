import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['sunglasses', 'headphones', 'hat'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured:{
        type: Boolean,
        default: false,
    }
},{timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)