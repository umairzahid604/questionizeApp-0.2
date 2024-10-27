import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';


export default function contact() {
    const [previouslink, setPreviouslink] = useState("")
    const [newlink, setNewlink] = useState("")

    async function UpdateLink() {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ previouslink, newlink })
        }
        let data = await fetch("/api/blog/updatepost", options)
        data = await data.json()
        alert(data.message)
    }



    return (
        <>
            <input value={previouslink} type="text" placeholder='previous link' onChange={(e) => setPreviouslink(e.target.value)} />
            <input value={newlink} type="text" placeholder='New link' onChange={(e) => setNewlink(e.target.value)} />
            <button onClick={() => {
                UpdateLink()
            }}>UPDATE</button>
        </>

    );
}

