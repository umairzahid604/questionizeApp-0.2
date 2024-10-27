
import BlogPost from "@/db/models/blogpost"

export default async function (req, res) {
    const { category } = req.body

    try {

        let posts = await BlogPost.find({ category: category }).lean()
        // let posts = await BlogPost.deleteMany({ category: category });
        

        res.status(200).json({ posts })

    } catch (error) {

        res.status(400).json({ error: { message: "An error occured" } })

    }



}
