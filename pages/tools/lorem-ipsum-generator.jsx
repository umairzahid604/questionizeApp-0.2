import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AddColor } from '@/components/TextGradientTool/AddColor';
import { AddMiddleColor } from '@/components/TextGradientTool/MiddleColor';
import { LoremIpsum } from "lorem-ipsum";
// import { toPng } from 'html-to-image';
export default function contact() {
    // Constants
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    const Fonts = [
        "Times New Roman",
        "Georgia",
        "Times",
        "Cambria",
        "Palatino",
        "Arial",
        "Helvetica",
        "Tahoma",
        "Verdana",
        "Calibri",
        "Courier New",
        "Lucida Console",
        "Monaco",
        "Consolas",
        "Andale Mono",
        "Comic Sans MS",
        "Brush Script MT",
        "Zapfino",
        "Pacifico",
        "Apple Chancery",
    ]

    const TextTransform = [
        "none",
        "capitalize",
        "uppercase",
        "lowercase",
    ]

    const TextAlign = [
        "left",
        "right",
        "center",
        "justify"
    ]
    const Tags = ["None", "h1", "h2", "h3", "p", "li", "div", "span"]


    // States
    const [isCopied, setIsCopied] = useState(false)
    const [TextOptions, setTextOptions] = useState({ words: 200, paragraphs: 1 })
    const [text, setText] = useState("")
    const [tag, setTag] = useState("None")
    const [style, setStyle] = useState({
        fontSize: '20px',
        lineHeight: "20px",
        fontWeight: "400",
        fontFamily: Fonts[0],
        textTransform: TextTransform[0],
        textAlign: TextAlign[0]

    })


    // Effects
    useEffect(() => {
        let text = lorem.generateWords(TextOptions.words)
        if (tag == "None") {

            text = `${splitTextIntoParts(text, TextOptions.paragraphs).join(".\n\n")}`

        } else if (tag == "li") {

            text =
                `<ul>
${splitTextIntoParts(text, TextOptions.paragraphs).map((para) => para.split(".").map((sentence) => `<${tag}>${sentence}.</${tag}>`).join("\n")).join("\n")}
</ul>`

        }
        else {

            text = `${splitTextIntoParts(text, TextOptions.paragraphs).map((para) => `<${tag}>${para}.</${tag}>`).join(".\n\n")}`

        }
        setText(text)

    }, [tag, TextOptions])

    // Functions

    function splitTextIntoParts(text, numParts) {
        if (typeof text !== 'string' || typeof numParts !== 'number' || numParts <= 0) {
            throw new Error('Invalid input');
        }

        const words = text.split(' ');
        const partLength = Math.ceil(words.length / numParts);
        const parts = [];

        for (let i = 0; i < words.length; i += partLength) {
            parts.push(words.slice(i, i + partLength).join(' '));
        }

        return parts;
    }


    function CopyCode() {
        navigator.clipboard.writeText(text)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }



    return (
        <>
            <Head>
                <title>Dummy Text (lorem ipsum) Generator - NerdyQAi</title>
                <meta name="keywords" content="dummy text generator, lorem ipsum generator ,online dummy text (lorem ipsum) generator, online generator tools , free tools, free text tools, text tools, nerdyqai tools" />

                <meta name="description" content="
                       The Dummy Text Generator is a must-have for layout design. It adds limitless words, paragraphs, and enables easy text editing and applying tags. Ideal for seamlessly integrating content into designs, it's vital for designers, writers, and developers, streamlining the layout process." />

            </Head>
            <Navbar apiKey={"asd"} />

            <div className="utility-tool-wrapper">
                <div className="box tool-info">

                    <h1>Dummy Text (lorem ipsum) Generator</h1>
                    <p>
                        The Dummy Text Generator is a must-have for layout design. It adds limitless words, paragraphs, and enables easy text editing and applying tags. Ideal for seamlessly integrating content into designs, it's vital for designers, writers, and developers, streamlining the layout process.
                    </p>
                    <p>Don't forget to try our <Link href={"/tools"}>More handy tools</Link> like this</p>


                </div>

                <div className='tool-grid'>
                    <div className="box options ">
                        <div className="option input-numbers">


                            <h2>Words</h2>
                            <input value={TextOptions.words} min={1} type="number" name="" id="" onChange={(e) => setTextOptions({ ...TextOptions, words: parseInt(e.target.value) })} />


                            <h2>Paragraphs</h2>
                            <input value={TextOptions.paragraphs} min={1} type="number" name="" id="" onChange={(e) => setTextOptions({ ...TextOptions, paragraphs: parseInt(e.target.value) })} />

                            <h2>Apply Tag</h2>
                            <select className='action' name="" id="" onChange={(e) => setTag(e.target.value)}>
                                {Tags.map((tag, i) => <option key={i} value={tag}>{tag}</option>)}
                            </select>

                            <h2>Font Size {style.fontSize}</h2>
                            <input defaultValue={20} className='action' min={10} max={120} type="range" name="" id="" onChange={(e) => setStyle({ ...style, fontSize: `${e.target.value}px` })} />

                            <h2>Font Weight {style.fontWeight}</h2>
                            <input defaultValue={4} className='action' min={4} max={9} type="range" name="" id="" onChange={(e) => setStyle({ ...style, fontWeight: `${e.target.value}00` })} />

                            <h2>Line Height {style.lineHeight}</h2>
                            <input defaultValue={20} className='action' min={10} max={120} type="range" name="" id="" onChange={(e) => setStyle({ ...style, lineHeight: `${e.target.value}px` })} />


                            <h2>Font Family</h2>
                            <select value={style.fontFamily} className='action' name="" id="" onChange={(e) => setStyle({ ...style, fontFamily: e.target.value })}>
                                {Fonts.map((font, i) => <option key={i} value={font}>{font}</option>)}
                            </select>

                            <h2>Text Transform</h2>
                            <select value={style.textTransform} className='action' name="" id="" onChange={(e) => setStyle({ ...style, textTransform: e.target.value })}>
                                {TextTransform.map((transform, i) => <option key={i} value={transform}>{transform}</option>)}
                            </select>

                            <h2>Text Align</h2>
                            <select value={style.textAlign} className='action' name="" id="" onChange={(e) => setStyle({ ...style, textAlign: e.target.value })}>
                                {TextAlign.map((align, i) => <option key={i} value={align}>{align}</option>)}
                            </select>

                            <button className={`action ${isCopied ? "copied" : ""}`} onClick={CopyCode}>{isCopied ? "Copied!" : "Copy Text"}</button>

                        </div>
                    </div>

                    <div className="text-wrapper">

                        <textarea spellCheck="false" style={style} value={text} className='box dummy-text-box' name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}>

                        </textarea>
                        <h2>CSS Code</h2>
                        <div className="box css">
                            <span>{tag == "None" ? "p" : tag == "li" ? "ul" : tag} &#123;</span>

                            <div> font-family: {style.fontFamily};</div>
                            <div> font-weight: {style.fontWeight};</div>
                            <div> font-size: {style.fontSize};</div>
                            <div> line-height: {style.lineHeight};</div>
                            <div> text-transform: {style.textTransform};</div>
                            <div> text-align: {style.textAlign};</div>

                            &#125;
                        </div>
                    </div>




                </div>

                <div className="box tool-description">

                    <h2>What is Dummy Text (lorem ipsum) Generator ?</h2>
                    <p>
                        dummy text generator is a helpful tool mainly used when creating things like websites or designs. Its main job is to create text that looks real but doesn't actually mean anything. This lets designers and developers work on how things look without worrying about the real words.
                    </p>

                    <h3>Easy to Change Text</h3>
                    <p>With a dummy text generator, you can decide how much text you need. You can pick how many words or paragraphs you want. This is useful when you're making different parts of your design that need different amounts of text.</p>

                    <h3>Adding Style with HTML and CSS</h3>
                    <p>Fancier dummy text generators can also let you make the text look special by using codes like HTML or CSS. These codes add structure and style to the text, like making it bold or changing its size. This helps you see how your design will really look when it's done.</p>

                    <h3>Making Text Look Different</h3>
                    <p>You can also change how the text looks by choosing things like how big the letters are, how much space there is between lines, and whether the letters are uppercase or lowercase. This way, you can control how the text fits into your design.</p>

                    <h3>Putting Text in the Right Place</h3>
                    <p>The tool can also help you make sure the text is in the right spot by aligning it left, right, center, or evenly across the page. This is important for keeping everything neat and organized.</p>
                    
                    <h3>Seeing the Code</h3>
                    <p>For more complex projects, some dummy text generators show you the code that makes the text look the way it does. This is helpful for developers who want to use the same styles in their actual project.</p>

                    <h2>Why it's Useful</h2>
                    <p>The main reason for using a dummy text generator is to make designing and developing easier. It lets you focus on how things look without waiting for real content. Designers can create sample designs, and developers can get the layout right before putting in the real words.</p>
                </div>
            </div>
            <Footer />
        </>

    );
}

