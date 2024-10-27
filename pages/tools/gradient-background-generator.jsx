import React from 'react'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer'
import { useState } from 'react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AddColor } from '@/components/TextGradientTool/AddColor';
import { AddMiddleColor } from '@/components/TextGradientTool/MiddleColor';
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

    const [TextColor, setTextColor] = useState({ name: "Text Color", value: "#ffffff", })
    const [startColor, setStartColor] = useState({ name: "Start Color", value: "#f00002", position: 0 })
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
    })

    const TextRef = useRef(null)

    // Effects
    useEffect(() => {
        setCode(`<${tag} style="font-size: ${style.fontSize}; background: ${style.backgroundImage};">${text}</${tag}>`)
    }, [style, text, SelectedGradientOptions, tag])


    useEffect(() => {
        const middleColors = MiddleColors.map((color) => `${color.value} ${color.position}%,`).join(" ")
        setStyle({ ...style, backgroundImage: `${SelectedGradientOptions.orientation.value}( ${SelectedGradientOptions.orientation.subvalue == "" ? ` to ${SelectedGradientOptions.position}` : ` ${SelectedGradientOptions.orientation.subvalue}  ${SelectedGradientOptions.size}  at  ${SelectedGradientOptions.position}`}, ${startColor.value} ${startColor.position}%, ${middleColors} ${endColor.value} ${endColor.position}%)` })
    }, [SelectedGradientOptions, startColor, endColor, MiddleColors])

    useEffect(() => {
        SetGradientValues(GradientExamples[3])
    }, [])


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
                        background: ${startColor.value};
                        background : ${style.backgroundImage};
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
                <title>Gradient Background Generator</title>
                <meta name="keywords" content="Gradient generator, background gradient generator, online gradient background generator, free tools, free gradient tools, text tools, nerdyqai tools" />

                <meta name="description" content="
                       This tool creates CSS Gradient code through an intuitive graphical user interface, generating code compatible with all CSS3-supporting browsers. It offers code generation for both linear and radial gradients and provides the option to import and edit existing CSS gradient code. Additionally, you can add text to preview how it will appear." />

            </Head>
            <Navbar apiKey={"asd"} />
            <div className="utility-tool-wrapper">
                <div className="box tool-info">

                    <h1>Gradient Background Generator</h1>
                    <p>
                        This tool creates CSS Gradient code through an intuitive graphical user interface, generating code compatible with all CSS3-supporting browsers. It offers code generation for both linear and radial gradients and provides the option to import and edit existing CSS gradient code. Additionally, you can add text to preview how it will appear.
                    </p>
                    <p>Don't forget to try our <Link href={"/tools/gradient-text-generator"}>Gradient Text Generator!</Link></p>


                </div>

                <div style={style} ref={TextRef} className="box background-gradient">
                    <span style={{ color: TextColor.value }}>{text}</span>
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
                        <AddColor color={TextColor} setColor={setTextColor} />

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
                        {/* <span>font-size : {style.fontSize} ;</span> */}
                        <span>background : {startColor.value} ;</span>
                        <span>background : {style.backgroundImage} ;</span>

                        {/* <span>-webkit-text-fill-color : transparent;</span>
                        <span>-webkit-background-clip : text;</span> */}
                    </div>
                )}
                <h2>Predefined Gradients Click to Apply!</h2>
                <div className="box gradient-examples">
                    {GradientExamples.map((example, i) => <div key={i} style={{ background: getGradientExample(example) }} className="gradient-example" onClick={(e) => { SetGradientValues(example) }}></div>)}

                </div>

                <div className="box tool-description">
                    <h2>What is Gradient Background Generator?</h2>

                    <p><strong>Gradient Background Generator</strong> is a versatile tool designed to create visually striking and dynamic backgrounds using gradient effects.</p>

                    <p>This generator allows users to experiment with various gradient options to achieve the desired look and feel for their background.</p>

                    <p>By providing editable text, orientation, size, position controls, live color pickers, and a range of predefined gradient palettes, this tool empowers users to design captivating backgrounds for websites, digital artworks, presentations, and more.</p>

                    <h2>Key Features of a Gradient Background Generator</h2>

                    <h3>Editable Text with Background Preview</h3>
                    <p>Users can input text and instantly visualize how the text will appear against the generated gradient background. This feature helps users assess readability and aesthetics before finalizing their design.</p>

                    <h3>Gradient Options</h3>
                    <p>The generator provides options to control the gradient's orientation (horizontal, vertical, diagonal), adjust its size (small to large), and position it within the background canvas.</p>

                    <h3>HTML Tags and CSS Styling</h3>
                    <p>In addition to the gradient background, the generator generates HTML and CSS code that can be easily integrated into web projects or other digital designs. This allows users to seamlessly incorporate their customized gradient backgrounds.</p>

                    <h3>Font Size Customization</h3>
                    <p>Users have the flexibility to adjust the font size of the text to ensure optimal readability and balance between the text and background.</p>

                    <h3>Live Color Picker with Multiple Colors</h3>
                    <p>A live color picker enables users to select colors in real-time and observe how they blend in the gradient. Multiple colors can be added to create multi-stop gradients, leading to visually engaging and complex background effects.</p>

                    <h3>Predefined Gradient Palettes</h3> <p>To streamline the design process, the generator often includes a collection of predefined gradient palettes. These palettes offer users a starting point and inspiration for creating harmonious and visually pleasing backgrounds.</p>

                    <h2>Purpose and Applications</h2>

                    <p>The primary purpose of a Gradient Background Generator is to provide a user-friendly interface for individuals and designers to create captivating backgrounds with minimal effort. This tool finds applications in a variety of contexts:</p>

                    <h3>Website Design</h3>
                    <p>Web designers can utilize gradient backgrounds to enhance the visual appeal of websites, making them more engaging and memorable. Gradient backgrounds can be used for headers, banners, sections, and other elements.</p>

                    <h3>Digital Artworks</h3>
                    <p>Artists can integrate gradient backgrounds into their digital artworks to add depth and atmosphere, making the central subject stand out.</p>

                    <h3>Presentations</h3>
                    <p>Professionals can use gradient backgrounds to make presentations more visually engaging and dynamic, helping to convey key information in an impactful manner.</p>

                    <h3>Social Media Graphics</h3>
                    <p>Designers can create attention-grabbing social media posts and graphics by combining gradient backgrounds with text and imagery.</p>

                    <h3>App Interfaces</h3>
                    <p>Mobile app developers can use gradient backgrounds to create visually appealing interfaces that enhance the user experience.</p>

                    <h3>Marketing Collateral</h3>
                    <p>Gradient backgrounds can be incorporated into marketing materials like posters, flyers, and advertisements to create an eye-catching visual effect.</p>

                    <h2>Why it's Useful</h2>
                    <p><strong>Gradient Background Generator</strong> offers a creative solution for generating visually captivating backgrounds by combining gradients with customizable text.</p>

                    <p>It empowers users to experiment with different gradient options, live color choices, and predefined palettes to design backgrounds that suit various design needs across digital platforms and visual mediums.</p>
                </div>


            </div>
            <Footer />
        </>

    );
}

