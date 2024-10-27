import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
const toolname = process.env.NEXT_PUBLIC_TOOL_NAME


export default function page() {
    const subjectOptions = ["Suggestion", "Feature Request", "Bug / Error", "Help", "FeedBack"]

    const [formData, setFormData] = useState({
        email: "",
        subject: subjectOptions[0],
        message: "",
    });

    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        seterror("")
        setsuccess("")
        if (formData.email.trim() == "") return seterror("Email Address is required !")
        if (formData.message.trim().length <= 20) return seterror("Message needs 20+ chars!")

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: formData.email, subject: formData.subject, message: formData.message })
        }

        fetch("/api/sendmail", options).then(data => data.json()).then(data => {
            if (data.error) {
                seterror(data.error.message)
            }
            else {
                seterror("")
                setsuccess(data.success.message)
                setFormData({ ...formData, email: "", message: "" })
            }
        })

        // Add logic to send form data to server or external service
    };

    return (
        <>
            <Head>
                <title>Get Gemini API Key in 3 Simple Steps</title>
                <meta name="description" content="Learn how to get your Gemini API key in 3 easy steps. Full guide included." />
                <meta name="keywords" content="Gemini API key, how to, simple steps, easy guide" />
            </Head>
            <div style={{ background: "white" }} className="container">
                <Navbar apiKey={"your-gemini-api-key"} />
                <div className="blog-post">
                    <div className="content">
                        <br /><br />
                        <h1>Get Your Gemini API Key</h1>
                        <p>This guide will show you how to get a Gemini API key in 3 simple steps. (don't worry gemini api key is completely free! )</p>

                        <h3>Step 1: Create Account</h3>
                        <p>To get a Gemini API key, Go to <a href="https://aistudio.google.com/apikey">Google AI Studio</a>. signup/login if you wouldn't.</p>

                        <h3>Step 2: Create API Key </h3>
                        <p>Scroll down to bottom, Click on <strong> "Create Api key"</strong> Button. Select new project and create apikey, then secure it privately. </p>

                        <h3>Step 3: Add Apikey to {toolname}</h3>
                        <p>Once you created apikey go to <a href="/#upgrade" target='_blank'>{toolname} Upgrade</a>, and place apikey.</p>

                        <h3>That's it, enjoy all the premium features of {toolname} for free!</h3>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );

}

