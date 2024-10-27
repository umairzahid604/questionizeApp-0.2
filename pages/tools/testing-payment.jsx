import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AddColor } from '@/components/TextGradientTool/AddColor';
import { AddMiddleColor } from '@/components/TextGradientTool/MiddleColor';
import PayoneerComponent from '@/components/payment';
// import { toPng } from 'html-to-image';
export default function contact() {


    return (
        <>
            <div>
                <h1>Your React App</h1>
                <PayoneerComponent />
            </div>
        </>

    );
}

