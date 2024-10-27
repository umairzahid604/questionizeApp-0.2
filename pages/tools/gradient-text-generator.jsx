import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { AddColor } from '@/components/TextGradientTool/AddColor';
import { AddMiddleColor } from '@/components/TextGradientTool/MiddleColor';
import Link from 'next/link';
// import { toPng } from 'html-to-image';
export default function contact() {
    // Constants
    const GradientOptions = {
        orientations: [
            { index: 0, name: "linear", value: "linear-gradient", subvalue: "" },
            { index: 1, name: "radial", value: "radial-gradient", subvalue: "circle" },
            { index: 2, name: "elliptical", value: "radial-gradient", subvalue: "ellipse " },
            { index: 3, name: "repeat linear", value: "repeating-linear-gradient", subvalue: "" },
            { index: 4, name: "repeat radial", value: "repeating-radial-gradient", subvalue: "circle" },
            { index: 5, name: "repeat elliptical", value: "repeating-radial-gradient", subvalue: "ellipse " },
        ],
        sizes: ["farthest-corner", "farthest-side"],
        positions: [
            "top",
            "right",
            "bottom",
            "left",
            "top left",
            "top right",
            "bottom left",
            "bottom right",
        ],
    }


    const GradientExamples = [
        {
            startColor: { name: "Start Color", value: "#3a3a3a", position: 20 },
            middleColors: [{ id: generateRandomHash(32), name: "Middle Color", value: "#6f6f6f", position: 50 }],
            endColor: { name: "End Color", value: "#b3b3b3", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#ff6b6b", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#48dbfb", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[1],
                orientation: GradientOptions.orientations[2]
            }
        },
        {
            startColor: { name: "Start Color", value: "#68c3d1", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#f3a683", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[2],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#2c3e50", position: 20 },
            middleColors: [{ id: generateRandomHash(32), name: "Middle Color", value: "#3498db", position: 50 }],
            endColor: { name: "End Color", value: "#e74c3c", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[3],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#87d68d", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#f39c12", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#c0392b", position: 20 },
            middleColors: [{ id: generateRandomHash(32), name: "Middle Color", value: "#2c3e50", position: 50 }],
            endColor: { name: "End Color", value: "#8e44ad", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[1],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#1e272e", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#596275", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#ff9a8b", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#f6f6f6", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[2],
                orientation: GradientOptions.orientations[2]
            }
        },
        {
            startColor: { name: "Start Color", value: "#dcdde1", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#00d2d3", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[3],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#8e44ad", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#3498db", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#2ecc71", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#27ae60", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[2],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#f39c12", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#e67e22", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[3],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#9b59b6", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#8e44ad", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#16a085", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#1abc9c", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[1],
                orientation: GradientOptions.orientations[0]
            }
        },
        {
            startColor: { name: "Start Color", value: "#f1c40f", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#f39c12", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[2],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#e74c3c", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#c0392b", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[1]
            }
        },
        {
            startColor: { name: "Start Color", value: "#3498db", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#2980b9", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[1],
                orientation: GradientOptions.orientations[2]
            }
        },

        {
            startColor: { name: "Start Color", value: "#34495e", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#2c3e50", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[3],
                orientation: GradientOptions.orientations[2]
            }
        },
        {
            startColor: { name: "Start Color", value: "#95a5a6", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#7f8c8d", position: 80 },
            options: {
                size: GradientOptions.sizes[1],
                position: GradientOptions.positions[0],
                orientation: GradientOptions.orientations[1]
            }
        },

        {
            startColor: { name: "Start Color", value: "#d35400", position: 20 },
            middleColors: [],
            endColor: { name: "End Color", value: "#e74c3c", position: 80 },
            options: {
                size: GradientOptions.sizes[0],
                position: GradientOptions.positions[1],
                orientation: GradientOptions.orientations[0]
            }
        },


        // Add more gradient examples here if needed
    ];


    const Tags = ["h1", "h2", "h3", "p", "div", "span"]

    const [startColor, setStartColor] = useState({ name: "Start Color", value: "#f00002", position: 10 })
    const [endColor, setEndColor] = useState({ name: "End Color", value: "#23079b", position: 80 })
    const [MiddleColors, setMiddleColors] = useState([])
    const [ShowHtml, setShowHtml] = useState(false)
    const [isCopied, setIsCopied] = useState(false)



    // { id:"End Color", value: "#004c68%", position: 50 }

    const [text, setText] = useState("Your Text")
    const [code, setCode] = useState(`<span>${text}</span>`)
    const [tag, setTag] = useState("h1")


    // States
    const [SelectedGradientOptions, setSelectedGradientOptions] = useState({
        orientation: GradientOptions.orientations[4],
        size: GradientOptions.sizes[1],
        position: GradientOptions.positions[2],
    })


    const [style, setStyle] = useState({
        fontSize: '70px',
        backgroundImage: `linear-gradient(to right, #121FCF 0%, #CF1512 100%)`,
        backgroundClip: "text !important",
        WebkitTextFillColor: "transparent"
    })

    const TextRef = useRef(null)

    // Effects
    useEffect(() => {
        setCode(`<${tag} style="font-size: ${style.fontSize}; background: ${style.backgroundImage}; -webkit-text-fill-color: transparent; -webkit-background-clip:text;">${text}</${tag}>`)
    }, [style, text, SelectedGradientOptions, tag])


    useEffect(() => {
        const middleColors = MiddleColors.map((color) => `${color.value} ${color.position}%,`).join(" ")
        setStyle({ ...style, backgroundImage: `${SelectedGradientOptions.orientation.value}( ${SelectedGradientOptions.orientation.subvalue == "" ? ` to ${SelectedGradientOptions.position}` : ` ${SelectedGradientOptions.orientation.subvalue}  ${SelectedGradientOptions.size}  at  ${SelectedGradientOptions.position}`}, ${startColor.value} ${startColor.position}%, ${middleColors} ${endColor.value} ${endColor.position}%)` })
    }, [SelectedGradientOptions, startColor, endColor, MiddleColors])



    // functions


    function AddColorHandler() {
        let newColor = { id: generateRandomHash(32), name: "Middle Color", value: "#206100", position: 0 }
        setMiddleColors([...MiddleColors, newColor])
    }

    function generateRandomHash(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            hash += characters.charAt(randomIndex);
        }
        return hash;
    }



    function CopyCode() {
        if (ShowHtml) {
            navigator.clipboard.writeText(code)
        }
        else {
            navigator.clipboard.writeText(
                `
                        font-size : ${style.fontSize};
                        background : ${style.backgroundImage};
                        -webkit-text-fill-color : transparent;
                        -webkit-background-clip : text;
                        `
            )

        }

        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }

    function getGradientExample(gradient) {
        const { options } = gradient
        const middleColors = gradient.middleColors.map((color) => `${color.value} ${color.position}%,`).join(" ")
        return `${options.orientation.value}( ${options.orientation.subvalue == "" ? ` to ${options.position}` : ` ${options.orientation.subvalue}  ${options.size}  at  ${options.position}`}, ${gradient.startColor.value} ${gradient.startColor.position}%, ${middleColors} ${gradient.endColor.value} ${gradient.endColor.position}%)`
    }

    function SetGradientValues(gradient) {

        setStartColor(gradient.startColor)
        setEndColor(gradient.endColor)
        setMiddleColors(gradient.middleColors)
        setSelectedGradientOptions(gradient.options)

    }

    return (
        <>
            <Head>
                <title>Gradient Text Generator - NerdyQAi</title>
                <meta name="keywords" content="Gradient generator, text gradient generator, online gradient text generator, free tools, free gradient tools, text tools, nerdyqai tools" />

                <meta name="description" content="
                        Explore this user-friendly online tool for creating vibrant CSS Text Gradients effortlessly.
                        Give your headings or text a lively makeover by generating necessary CSS or HTML code, allowing you to customize font size and text.
                        Seamlessly integrate the code into your webpages to achieve an eye-catching and dynamic appearance." />

            </Head>
            <Navbar apiKey={"asd"} />
            <div className="utility-tool-wrapper">
                <div className="box tool-info">

                    <h1>Gradient Text Generator</h1>
                    <p>

                        Explore this user-friendly online tool for creating vibrant CSS Text Gradients effortlessly.
                        Give your headings or text a lively makeover by generating necessary CSS or HTML code, allowing you to customize font size and text.
                        Seamlessly integrate the code into your webpages to achieve an eye-catching and dynamic appearance.
                    </p>
                    <p>Don't forget to try our <Link href={"/tools/gradient-background-generator"}>Gradient Background Generator!</Link></p>


                </div>

                <div ref={TextRef} className="box display-text">
                    <span style={style}>{text}</span>
                </div>
                <div className="box options">
                    <div className="option">
                        <h2>Orientation</h2>

                        <select value={SelectedGradientOptions.orientation.index} name="" id="" onChange={(e) => setSelectedGradientOptions({ ...SelectedGradientOptions, orientation: GradientOptions.orientations[e.target.value] })}>
                            {GradientOptions.orientations.map((orientation, i) => <option key={i} value={orientation.index}>{orientation.name}</option>)}
                        </select>

                        {SelectedGradientOptions.orientation.subvalue != "" &&
                            <>
                                <h2>Size</h2>
                                <select value={SelectedGradientOptions.size} name="" id="" onChange={(e) => setSelectedGradientOptions({ ...SelectedGradientOptions, size: e.target.value })}>
                                    {GradientOptions.sizes.map((size, i) => <option key={i} value={size}>{size}</option>)}
                                </select>
                            </>
                        }

                        <h2>Positon</h2>
                        <select value={SelectedGradientOptions.position} name="" id="" onChange={(e) => setSelectedGradientOptions({ ...SelectedGradientOptions, position: e.target.value })}>
                            {GradientOptions.positions.map((position, i) => <option key={i} value={position}>{position}</option>)}
                        </select>

                    </div>
                    <div className="option">
                        <AddColor color={startColor} setColor={setStartColor} />
                        {MiddleColors.length != 0 &&
                            MiddleColors.map((color) => <AddMiddleColor MiddleColor={color} MiddleColors={MiddleColors} setMiddleColors={setMiddleColors} />)
                        }
                        <AddColor color={endColor} setColor={setEndColor} />

                        <button onClick={AddColorHandler}>Add Colors</button>


                    </div>
                </div>

                <div className="box actions">
                    <input className="action" value={text} type="text" placeholder='Your Text' onChange={(e) => setText(e.target.value)} />
                    <select className='action' name="" id="" onChange={(e) => setTag(e.target.value)}>
                        {Tags.map((tag, i) => <option key={i} value={tag}>{tag}</option>)}
                    </select>
                    <input className='action' min={10} max={120} type="range" name="" id="" onChange={(e) => setStyle({ ...style, fontSize: `${e.target.value}px` })} />
                    <button className="action" onClick={() => setShowHtml(ShowHtml ? false : true)}>{ShowHtml ? "CSS Code" : "HTML Code"}</button>
                    <button className={`action ${isCopied ? "copied" : ""}`} onClick={CopyCode}>{isCopied ? "Copied!" : "Copy Code"}</button>

                </div>

                {ShowHtml ? (
                    <div className="box code">
                        {code}
                    </div>
                ) : (
                    <div className="box code css">
                        <span>font-size : {style.fontSize};</span>
                        <span>background : {style.backgroundImage};</span>
                        <span>-webkit-text-fill-color : transparent;</span>
                        <span>-webkit-background-clip : text;</span>
                    </div>
                )}
                <h2>Predefined Gradients Click to Apply!</h2>
                <div className="box gradient-examples">
                    {GradientExamples.map((example, i) => <div key={i} style={{ background: getGradientExample(example) }} className="gradient-example" onClick={(e) => { SetGradientValues(example) }}></div>)}

                </div>
                <div className="box tool-description">
                    <h2>What is Gradient Text Generator?</h2>
                    <p><strong>Gradient Text Generator</strong> is a dynamic tool designed to create visually appealing and attention-grabbing text by applying gradients to the letters or characters.</p>

                    <p>This generator allows users to input their desired text and customize various parameters of the gradient, such as orientation, size, and position.</p>

                    <p>By leveraging HTML and CSS, users can not only generate gradient text but also have the flexibility to adjust font sizes, apply specific styling, and fine-tune the appearance of the text to match their design preferences.</p>

                    <h2>Key Features of a Gradient Text Generator</h2>

                    <h3>Editable Text</h3>
                    <p>The generator provides an input field where users can enter the text they want to transform into gradient text. This text can be a single word, a phrase, a sentence, or any other combination of characters.</p>

                    <h3>Gradient Options</h3>
                    <p>Users can control the appearance of the gradient by selecting the orientation (horizontal, vertical, diagonal), adjusting the size (from small to large), and positioning the gradient within the text.</p>

                    <h3>HTML Tags and CSS Styling</h3>
                    <p>The generated gradient text is often accompanied by HTML and CSS code. This allows users to easily embed the gradient text into their web projects or digital designs. The HTML tags provide structure, while the CSS styling defines the appearance of the text, including font type, color, size, and more.</p>

                    <h3>Font Size Customization</h3>
                    <p>In addition to the gradient, users can adjust the font size of the text. This helps in achieving the desired visual balance between the text and the gradient background.</p>

                    <h3>Live Color Picker</h3>
                    <p>One of the standout features of a gradient text generator is the live color picker. This interactive tool enables users to select multiple colors and create a gradient transition between them. By dragging the color markers, users can see the real-time impact of color changes on the gradient text.</p>

                    <h3>Multiple Colors</h3>
                    <p>Users have the freedom to choose multiple colors to create complex gradients. These colors can be seamlessly blended to produce eye-catching and unique effects.</p>

                    <h3>Predefined Gradient Palettes</h3>
                    <p>To streamline the design process, the generator often includes a collection of predefined gradient palettes. These palettes offer users a starting point and inspiration for creating harmonious and visually pleasing backgrounds.</p>

                    <h2>Purpose and Applications</h2>

                    <p>The primary purpose of a gradient text generator is to enhance the aesthetics of text-based content, making it more visually appealing and engaging. This tool finds applications in various creative and design scenarios, such as:</p>

                    <h3>Web Design</h3>
                    <p>Web developers and designers use gradient text to create captivating headings, banners, call-to-action buttons, and other prominent elements on websites. The dynamic and attention-grabbing nature of gradient text can contribute to a more engaging user experience.</p>

                    <h3>Graphic Design</h3>
                    <p>Graphic designers use gradient text in digital artworks, social media posts, advertisements, and posters to add a striking visual element that stands out against a background.</p>

                    <h3>Branding</h3>
                    <p>Gradient text can be employed in branding materials such as logos, product packaging, and marketing collateral to reflect a modern and visually appealing brand identity.</p>

                    <h3>Presentations</h3>
                    <p>Professionals use gradient text to make key points in presentations more visually memorable, ensuring that the audience's attention is captured.</p>

                    <h3>Typography Art</h3>
                    <p>Artists and typographers use gradient text as a creative tool to design visually intricate and captivating typographic compositions.</p>
                    
                    <h2>Why it's Useful</h2>
                    <p><strong>Gradient Text Generator</strong> offers a versatile and powerful way to transform plain text into captivating and visually appealing elements, catering to a wide range of design and communication needs across various digital and visual mediums.</p>

                </div>
            </div>

            <Footer />
        </>

    );
}

