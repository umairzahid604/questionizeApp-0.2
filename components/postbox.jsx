import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const PostBox = ({ post }) => {
    
    function formatDate(inputDate) {
        // Parse the input date string into a Date object
        const dateObj = new Date(inputDate);

        // Define month names to use in the output
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // Get the components of the date
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        const day = dateObj.getDate();

        // Format the output as "Month, Day Year"
        const formattedDate = `${monthNames[month]}, ${day} ${year}`;

        return formattedDate;
    }

    
    
    return (

        <div className="post-box">
            <a href={`/blog/category/${post.category}/${post.link}`}>
                {/* <div className="image"><img src={post.imagelink} alt="" /></div> */}
                <div className="image"><Image src={post.imagelink} width={700} height={700} alt={post.title} ></Image></div>
                
                <div className="post-info">
                    <h2>{post.title}</h2>
                    <div>
                        <span>🗄️ {formatDate(post.createdAt)}</span>
                        <span>🕒 {post.readmins} min read</span>
                    </div>
                    <h3>Read More →</h3>
                </div>
            </a>
        </div>

    )
}
