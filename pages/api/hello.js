
import BlogPost from "@/db/models/blogpost"

export default async function (req, res) {
    
    try {
        BlogPost.find({})
        res.status(200).json({ success: { message: "ok" } })
    
    } catch (error) {
        
        res.status(400).json({ error: { message: "An error occured" } })

    }



}
