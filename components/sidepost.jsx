import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SidePost = ({ post }) => {

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

        <div className="side-post">
            <Image src={post.imagelink} width={100} height={100} alt={post.title}></Image>
            {/* <img src={post.imagelink} width={100} height={100} alt="" /> */}
            <div className="side-post-info">
                <h3>{post.title}</h3>
                <p>{formatDate(post.createdAt)}</p>
                <Link href={`/blog/category/${post.category}/${post.link}`}>{post.readmins} min Read</Link>


            </div>
        </div>

    )
}
