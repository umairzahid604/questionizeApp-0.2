import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Question } from './question.jsx'
import { Plans } from '@/utils/constants'
import { generateRandomHash } from '@/utils/functions.js'
// or <a href={"./#pricing"}>Buy credits</a>

export const NerdyTool = ({ planData }) => {
    const [Options, setOptions] = useState(planData.auth && planData.t != '' ? Plans[planData.t] : Plans["free"])
    const [words, setWords] = useState(0)
    const [credits, setCredits] = useState(planData.n)
    const [error, setError] = useState("")
    const [isGenerating, setisGenerating] = useState(false)
    const [useKey, setUseKey] = useState(true)


    const [selectedOptions, setSelectedOptions] = useState({
        text: "",
        questionsTone: Options.questionsTones[0],
        questionsQty: Options.questionsQtys[0],
    })

    const [Questions, setQuestions] = useState([])

    useEffect(() => {
        setCredits(planData.n)
    }, [planData])

    // useEffect(() => {
    //     if (!planData.auth) return
    //     if (!useKey) return setOptions(Plans[planData.t])
    //     setOptions(Plans.free)
    // }, [useKey])

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 2000);
    }, [error])


    function countWords(text) {
        const words = text.split(' ');
        return words.filter(word => word !== '').length;
    }

    function searchBoxValuehandler(event) {
        const value = event.target.value;
        const count = countWords(value);
        if (count <= Options.words) {
            setSelectedOptions({ ...selectedOptions, text: value })
            setWords(count);
        }
    }

    async function GenerateQuestions() {
        if (isGenerating) return
        if (!useKey) {

            if (credits == 0) return setError("You are out of credits!")
        }

        if (words == 0) {
            setError("Please enter Text!")
            setTimeout(() => {
                setError("")
            }, 2000);
            return
        }
        if (words > Options.words) return

        setisGenerating(true)
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ options: selectedOptions, useKey })

        }

        let data = await fetch("./api/generatequestions", options)
        data = await data.json()

        if (!data.result) {
            setError(data.error.message)
            setisGenerating(false)
            return
        }
        setQuestions([...Questions, ...formatQuestions(data.result)])
        setisGenerating(false)

        if (!useKey) setCredits(credits - 1)
    }

    function formatQuestions(questions) {
        let FormatedQuestions = questions.map((quest) => {
            return { id: generateRandomHash(32), question: quest, answer: "" }
        })
        return FormatedQuestions
    }

    const handleDownload = () => {
        // Create some sample text content
        const textContent = Questions.map((question) => {
            return (
                `${question.question}\n
${question.answer == "" || question.answer == undefined ? "" : question.answer + "\n"}

`
            )
        }).join("");

        // Create a Blob with the text content
        const blob = new Blob([textContent], { type: 'text/plain' });

        // Create a URL for the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = `NerdyQAi - Q/A - ${new Date(Date.now())}.txt`; // Set the desired file name

        // Trigger a click event on the anchor element
        anchor.click();

        // Clean up by revoking the Blob URL
        URL.revokeObjectURL(blobUrl);
    };


    return (
        <div className="main-tool-wrapper">
            <div className="search-box-wrapper">

                {error != "" &&
                    <div className="message error">{error}</div>
                }
                <div className='counter-wrapper'>
                    <div> {words}/{Options.words} words</div>

                    {/* {planData.auth && planData.k &&

                        <div className='use-wrapper'>
                            <input type="checkbox" name="" id="" onChange={(e) => setUseKey(useKey ? false : true)} /> Use Apikey
                        </div>
                    }
                    {planData.auth &&
                        <div> {credits} Credits</div>
                    } */}
                    {!planData.auth &&
                        <div className='auth-msg'> <a href="https://www.toprevenuegate.com/up5t6nuw?key=e009eb247042e9f98457c7b896fcc818">Add ApiKey to continue</a>  </div>
                    }

                </div>
                <textarea value={selectedOptions.text} placeholder='Add your text here' name="" id="" cols="30" rows="10" onChange={searchBoxValuehandler}></textarea>
                <div className="options">
                    {Options.questionsQtys.map((prop, i) => <button key={i} onClick={() => setSelectedOptions({ ...selectedOptions, questionsQty: prop })} className={`option ${prop == selectedOptions.questionsQty ? "active" : ""}`}>{prop}</button>)}
                </div>
                <div className="options">
                    {Options.questionsTones.map((prop, i) => <button key={i} onClick={() => setSelectedOptions({ ...selectedOptions, questionsTone: prop })} className={`option ${prop == selectedOptions.questionsTone ? "active" : ""}`}>{prop}</button>)}
                </div>

                {planData.auth &&
                    <button className='generate-btn' onClick={GenerateQuestions}>{isGenerating ? "Generating..." : "Generate Questions"}</button>
                }

                {!planData.auth &&
                    <button className='generate-btn'> <a href={"./#upgrade"}>Add ApiKey to continue</a> </button>
                }

            </div>
            {Questions.length != 0 &&
                <div className="questions-wrapper">
                    <div className='actions-wrapper'>
                        <h3>Generated Questions</h3>
                        {Questions.length != 0 &&
                            <button className='file-download' onClick={handleDownload}>Download as Txt</button>
                        }
                    </div>

                    {Question.length != 0 && Questions.map((question, i) => {
                        return (
                            <Question key={i} credits={credits} context={selectedOptions.text} useKey={useKey} setCredits={setCredits} question={question} Questions={Questions} setQuestions={setQuestions} Options={Options} />
                        )
                    })}
                </div>
            }

        </div>
    )
}


