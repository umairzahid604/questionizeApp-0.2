
import BlogPost from "@/db/models/blogpost"

export default async function (req, res) {

    // const { previouslink, newlink } = req.body
    // console.log(previouslink, newlink)
    try {

        // let posts = await BlogPost.find({}).lean().sort({_id:-1})
        // posts = posts.map((post)=>{
        //     post.category = "interview-strategies"
        //     return post
        // })

        // let posts = await BlogPost.updateMany({ title: "9 Best Practices for Building Strong Teams through Effective Office Communication" }, { $set: { imagelink: "https://res.cloudinary.com/dg3xdnft1/image/upload/v1691379989/9-best-practices-for-building-strong-teams-through-effective-office-communication_yi3tox.png" } })

        res.status(200).json({message:"updated successfully"})

    } catch (error) {

        res.status(400).json({ error: { message: "An error occured" } })

    }



}
