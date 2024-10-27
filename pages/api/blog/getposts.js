
import BlogPost from "@/db/models/blogpost"

export default async function (req, res) {

    try {
        const { num } = req.query;

        let query = BlogPost.find({},{content:0}).lean().sort({ _id: -1 });

        if (num) {
            const numValue = parseInt(num, 10);
            if (!isNaN(numValue) && numValue > 0) {
                query = query.limit(numValue); // Limit the number of records if 'num' is provided and valid
            }
        }

        const posts = await query.exec();

        res.status(200).json({ posts });
    } catch (error) {
        res.status(400).json({ error: { message: "An error occurred" } });
    }



}
