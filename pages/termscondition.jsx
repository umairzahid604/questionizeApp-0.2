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
                <title>Terms and Conditions</title>

            </Head>
            <Navbar apiKey={"apiKey"} />
            <div style={{ background: "white" }} className="container">
                <div className="post">
                    <h1>Terms and Conditions - {toolname}.com</h1>

                    <p><strong>1. Acceptance of Terms</strong></p>
                    <p>By accessing and using {toolname}.com, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our website or services.</p>

                    <p><strong>2. Changes to Terms</strong></p>
                    <p>{toolname}.com reserves the right to modify, update, or revise these terms and conditions at any time. Continued use of the website or services after any such changes shall constitute your consent to such changes.</p>

                    <p><strong>3. Use of the Website/Service</strong></p>
                    <p>You agree to use {toolname}.com for lawful purposes only and in a manner consistent with all applicable local, national, or international laws and regulations.</p>

                    <p><strong>4. User Accounts</strong></p>
                    <p>If you create an account on {toolname}.com, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.</p>

                    <p><strong>5. Intellectual Property</strong></p>
                    <p>All content on {toolname}.com, including text, graphics, logos, and images, is the property of {toolname}.com and is protected by intellectual property laws. You may not use, modify, reproduce, or distribute any content without the express written consent of {toolname}.com.</p>

                    <p><strong>6. Privacy Policy</strong></p>
                    <p>Your use of {toolname}.com is also governed by our Privacy Policy, which can be found <a href="/privacypolicy">here</a>.</p>

                    <p><strong>7. Limitation of Liability</strong></p>
                    <p>{toolname}.com is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of {toolname}.com.</p>

                    <p><strong>9. Contact Information</strong></p>
                    <p>If you have any questions or concerns about these terms and conditions, please <a href="/contact"> contact us.</a></p>

                </div>

            </div>
            <Footer />

        </>
    )
}
