import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadFile = async (req, res) => {
    try {
        const filePath = req.file.path;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "uploads"
        });

        // Remove local temp file
        fs.unlinkSync(filePath);

        return res.json({
            success: true,
            message: "File uploaded successfully",
            url: result.secure_url
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error });
    }
};
