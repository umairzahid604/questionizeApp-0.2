import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './Banner'

export const ToolBox = ({ tool }) => {

    return (

        <div className="post-box">
            {tool.redirect ? (
                <a href={tool.redirect}>
                    {/* <div className="image"><img src={post.imagelink} alt="" /></div> */}
                    <div className="image"><Image src={`/tools/${tool.image}`} width={700} height={700} alt={tool.title} ></Image></div>

                    <div className="post-info">
                        <h2>{tool.name}</h2>
                        <div>
                            <p>{tool.description}</p>
                        </div>
                        <h3>Try Now 🚀</h3>
                    </div>
                </a>

            ) : (
                <a href={`/tools/${tool.link}`}>
                    {/* <div className="image"><img src={post.imagelink} alt="" /></div> */}
                    <div className="image"><Image src={`/tools/${tool.image}`} width={700} height={700} alt={tool.title} ></Image></div>

                    <div className="post-info">
                        <h2>{tool.name}</h2>
                        <div>
                            <p>{tool.description}</p>
                        </div>
                        <h3>Try Now 🚀</h3>
                    </div>
                </a>
            )
            }

        </div >

    )
}
