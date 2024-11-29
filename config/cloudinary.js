import { v2 as cloundinary } from "cloudinary";

const connectCloudinary = async () => {
    cloundinary.config({
        cloud_name: process.env.CLOUNDINARY_NAME,
        api_key: process.env.CLONDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
};

export default connectCloudinary;