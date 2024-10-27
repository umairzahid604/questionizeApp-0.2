import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import Link from 'next/link';
import Head from 'next/head';
const toolname = process.env.NEXT_PUBLIC_TOOL_NAME


export default function privacypolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>

            </Head>
                <Navbar apiKey={"apiKey"} />
            <div style={{background:"white"}} className="container">
                <div  className="post">
                    <h1>Privacy Policy for {toolname}</h1>
                    <p>At {toolname}, we take the privacy of our users seriously. This privacy policy outlines the types of information we collect and how we use that information.</p>
                    <h2>Information We Collect</h2>
                    <p>When you use our service, we may collect your OpenAi ApiKey to unlock premium featurs for you. the questions and answers you generate, and your interaction with our website.</p>
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to provide and improve our service, to communicate with you, and to personalize your experience.</p>
                    <p>We do not sell or share your personal information with third parties, except as required by law or as necessary to provide our service. We may share anonymized data with third parties for research and analysis purposes.</p>
                    <h2>Data Security</h2>
                    <p>We take data security seriously and use industry-standard measures to protect your personal information. we don't use your ApiKey anywhere else. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your data.</p>
                    <h2>Changes to Privacy Policy</h2>
                    <p>We may update this privacy policy from time to time, and we will notify you of any changes by posting the new policy on our website. Your continued use of our service after any changes to this policy indicates your acceptance of the updated policy.</p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or concerns about our privacy policy, please contact us at <Link href="/contact">{toolname}.com/contact</Link> </p>
                </div>

            </div>
            <Footer />

        </>
    )
}
