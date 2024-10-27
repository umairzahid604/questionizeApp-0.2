
import BlogPost from "@/db/models/blogpost"

export default async function (req, res) {
    const { title } = req.body

    try {

        let post = await BlogPost.findOne({ link: title }).lean()

        const relatedposts = await BlogPost.aggregate([
            { $match: { category: post.category } },
            { $match: { link: { $ne: title } } }, // Filters documents that have casestudy value of 1
            { $sample: { size: 5 } }, // Retrieves a random document
            { $project: { content: 0 } }
        ]);

        const moreposts = await BlogPost.aggregate([
            { $match: { category: { $ne: post.category } } }, // Excludes documents with the specified category value
            { $sample: { size: 5 } }, // Retrieves a random document
            { $project: { content: 0 } }

        ]);

        res.status(200).json({ post, relatedposts, moreposts })

    } catch (error) {

        res.status(400).json({ error: { message: "An error occured" } })

    }



}
