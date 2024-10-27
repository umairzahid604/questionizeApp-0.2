import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SideTool = ({ tool }) => {


    return (

        <div className="side-post">
            <Image src={`/tools/${tool.image}`} width={100} height={100} alt={tool.name}></Image>
            {/* <img src={post.imagelink} width={100} height={100} alt="" /> */}
            <div className="side-post-info">
                <h3>{tool.name}</h3>
                <Link href={`/tools/${tool.link}`}>Try Now 🚀</Link>


            </div>
        </div>

    )
}
