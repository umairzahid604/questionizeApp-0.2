import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Banner from './Banner'

const toolname = process.env.NEXT_PUBLIC_TOOL_NAME
export const AboutTool = ({ planData }) => {
    const [apiKey, setapiKey] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const router = useRouter()

    async function ApiKeyConfiguredHandler() {

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ apiKey: apiKey })
        }
        let data = await fetch("./api/authApiKey", options)
        data = await data.json()
        if (data.error) return setError(data.error.message)
        setapiKey("")
        router.push("./?k=true")

    }

    async function RemoveApiKey() {
        let data = await fetch("./api/removeapikey")
        data = await data.json()
        if (data.error) return setError(data.error.message)
        setSuccess("ApiKey Removed Successfully!")
        setTimeout(() => {
            setSuccess("")
            router.push("./")
        }, 2000);
    }

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 2000);
    }, [error])


    return (
        <>
            <div id='about' className="about" >
                <div className="content-box">
                    <div className="content">
                        <h2 data-aos="fade-up">What is {toolname} ?</h2>
                        <p data-aos="fade-up" className='para'>{toolname} is an AI-powered Question Answer Generator tool that has been designed to help individuals and organizations generate relevant questions from their long-form content. It is a powerful and innovative tool that can assist in transforming complex texts into simple and easy-to-understand questions.</p>
                        <Banner />

                    </div>
                    <div className="image"><Image src={"/robot.png"} width={500} height={500} alt='picture is not available'></Image></div>
                </div>

                <div className="content-box">
                    <div className="content order-1">
                        <h2 data-aos="fade-up">Automatic Question Generation for Student Exams</h2>
                        <p data-aos="fade-up" className="para">One of the key features of {toolname} is its ability to generate questions automatically for student exams. This is particularly useful for educators and trainers who need to create assessments and quizzes for their students. With {toolname}, they can easily convert their course content into exam questions that are both relevant and challenging.</p>
                        <Banner />

                    </div>
                    <div className="image order-0"><Image src={"/robot-writing.png"} width={500} height={500} alt='picture is not available'></Image></div>
                </div>

                <div className="content-box">
                    <div className="content">
                        <h2 data-aos="fade-up">Convert Company Knowledge Bases, Blog Posts, Articles, and Essays</h2>
                        <p data-aos="fade-up" className='para'>{toolname} also offers the capability to convert company knowledge bases, blog posts, and essays into question-and-answer format. This feature is particularly useful for businesses that want to create online training courses for their employees or customers.</p>
                        <Banner />

                    </div>
                    <div className="image"><Image src={"/robot-company.png"} width={500} height={500} alt='picture is not available'></Image></div>
                </div>

                {/* <div className="content-box">
                    <div className="content order-1">
                        <h2 data-aos="fade-up">Generate Questions from Files, Documents, and PDFs (coming soon)</h2>
                        <p data-aos="fade-up" className="para">{toolname}'s functionality is not limited to textual content. It can also generate questions from files, documents, and PDFs. This feature is particularly beneficial for researchers who need to extract relevant questions from large volumes of data.</p>
                        <Banner />

                    </div>
                    <div className="image order-0"><Image src={"/file-document.png"} width={500} height={500} alt='picture is not available'></Image></div>
                </div> */}


                <>
                    {/* <div className="content-box">
                            <div className="content">
                                <h2 data-aos="fade-up">Limitations of using free plan</h2>
                                <p data-aos="fade-up" className='para'>While {toolname} offers a free plan, there are limitations that users should be aware of before using the service.</p>
                                <div data-aos="fade-up" className="points">
                                    <h3 className='point'>Words Limitation</h3>
                                    <h3 className='point'>Question Limitations</h3>
                                    <h3 className='point'>Answer Length Limitations</h3>
                                    <h3 className='point'>No tone customization for questions/answers</h3>

                                </div>
                            </div>
                            <div className="image"><Image src={"/limit-hand.png"} width={500} height={500} alt='picture is not available'></Image></div>

                        </div> */}


                </>
                {planData.k == "" || planData.k == undefined &&
                    <div className="content-box">
                        <div id="upgrade" className="content ">
                            <h2 data-aos="fade-up">UpGrade for Free</h2>
                            <p data-aos="fade-up" className="para">Yes! You can upgrade {toolname} and unlock all premium features for free by adding Your API key. <a style={{color:"skyblue"}} href="/get-openai-apikey">(Get Apikey)</a> </p>
                            <div data-aos="fade-up" className="points">
                                <h3 className="point">• Add Upto 700 Words</h3>
                                <h3 className="point">• Generate Upto 25 Questions</h3>
                                <h3 className="point">• Generate Customize Answers</h3>
                                <h3 className="point">• Specify Tone of Questions</h3>
                                <h3 className="point">• Specify Tone of Answers</h3>
                                <h3 className="point">• Generate Upto 300 words long Answers</h3>
                                <h3 className="point">• Download Q/A as Txt file</h3>
                            </div>
                            <Banner />

                            <div className="actions" data-aos="fade-up"
                                data-aos-duration="1000">
                                {error != "" &&
                                    <div className="message error">{error}</div>

                                }
                                <input type="text" value={apiKey} placeholder='Enter your ApiKey' onChange={(e) => { setapiKey(e.target.value) }} />
                                <button onClick={() => {
                                    ApiKeyConfiguredHandler()

                                }}>Add API Key </button>
                                <button><a target='_blank' href="/get-openai-apikey">Get API key</a></button>

                            </div>
                        </div>
                        <div className="image"><Image src={"/upgrade.png"} width={500} height={500} alt='picture is not available'></Image></div>
                    </div>
                }
                {planData.k != "" && planData.k != undefined &&
                    <div className="content-box">
                        <div className="content">
                            <h2 data-aos="fade-up">Thanks for upgrading</h2>
                            <p data-aos="fade-up" className='para'>Wow ! You're using Premium version of {toolname}. Now you can use all of the premium features mentioned below!</p>
                            <div data-aos="fade-up" className="points">
                                <h3 className="point"> Add Upto 700 Words</h3>
                                <h3 className="point"> Generate Upto 25 Questions</h3>
                                <h3 className="point"> Generate Customize Answers</h3>
                                <h3 className="point"> Specify Tone of Questions</h3>
                                <h3 className="point"> Specify Tone of Answers</h3>
                                <h3 className="point"> Generate Upto 300 words long Answers</h3>
                                <h3 className="point"> Download Q/A as Txt file</h3>

                            </div>
                            <div className="actions">
                                {error != "" &&
                                    <div className="message error">{error}</div>

                                }
                                {success != "" &&
                                    <div className="message success">{success}</div>

                                }
                                <button onClick={RemoveApiKey}>Remove ApiKey</button>
                            </div>
                        </div>
                        <div className="image"><Image src={"/upgraded-robot.png"} width={500} height={500} alt='picture is not available'></Image></div>
                    </div>
                }

            </div>

        </>
    )
}
