
import BlogPost from "@/db/models/blogpost"

const Writers = [
    { name: "David Rodriguez", skills: "HR Manager, Content Writer", avatar: "/writers/david.png" },
    { name: "Umair Zahid", skills: "Writer, Web-Developer, CEO NerdyQAi", avatar: "/writers/umair.png" },
    { name: "Daniel Davis", skills: "Speaker, Writer", avatar: "/writers/daniel.png" },
    { name: "Archer Noble", skills: "Author, Career Catalyst", avatar: "/writers/archer.png" },

]







export default async function (req, res) {
    const { title, writer, category, content, imageLink, readmins } = req.body
    let { link } = req.body
    link = link.trim().replaceAll(" ", "-")
    let imagelink = imageLink.replaceAll("dl=0", "raw=1")

    try {
        let newPost = new BlogPost({
            title, category, content, link, imagelink, readmins,
            author: Writers[writer]
        })

        let data = await newPost.save()

        res.status(200).json({ success: { message: "Post published successfully" } })

    } catch (error) {

        res.status(400).json({ error: { message: "An error occured" } })

    }



}

