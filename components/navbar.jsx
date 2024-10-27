import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from './Banner'
const toolname = process.env.NEXT_PUBLIC_TOOL_NAME

export const Navbar = ({ apiKey }) => {
    const [showSmallNav, setshowSmallNav] = useState(false)
    const [clickAd, setClickAd] = useState(true)
    const pages = [
        { name: "Home", link: "/" },
        { name: "Get ApiKey", link: "/get-openai-apikey" },

    ]

    return (
        <>
            {/* <div className="notice"> Good News! <a href='/'> Premium domain {toolname}.com</a> is available for sale. If you are interested, <a href="mailto:zahidumair042@gmail.com">contact us</a> directly! Get a response within an hour!</div> */}
            <div className="navbar" >
                <div className="logo" ><a href={"/"}>{toolname}</a></div>
                <div className="menu" >

                    {pages.map((page, i) => {
                        return (
                            <div key={i} className="menuItem"> <a href={`${page.link}`}>{page.name}</a></div>
                        )
                    })}
                    {apiKey == "" &&
                        <>
                            <div className="menuItem"> <a href="/#upgrade">UpGrade for free</a></div>
                        </>
                    }


                </div>
                <div className="navbtn" onClick={() => showSmallNav ? setshowSmallNav(false) : setshowSmallNav(true)}> <Image width={50} height={50} src="/logo-robot.png" alt="Menu" /> </div>

            </div>
            <div className={`smallNavbar ${showSmallNav ? "showSmallNavbar" : ""}`} >
                {/* <div className="menuItem"> <a href="#upgrade">UpGrade for free</a></div>
                <div className="menuItem"> <a href="#upgrade">Get ApiKey</a></div> */}
                {pages.map((page, i) => {
                    return (
                        <div key={i} className="menuItem"> <a href={`${page.link}`}>{page.name}</a></div>
                    )
                })}
            </div>

        </>
    )
}
