import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useClickOutside } from '@/utils/functions.js'


export const Question = ({ question, Questions, setQuestions, Options, credits, setCredits, useKey, context }) => {
    const generatorRef = useRef(null);
    const [showOptions, setShowOptions] = useState(false)
    const [Question, setQuestion] = useState(question)
    const [isGenerating, setisGenerating] = useState(false)
    const [error, setError] = useState("")



    const [selectedOptions, setSelectedOptions] = useState({
        context: context,
        text: question.question,
        answerTone: Options.answerTones[0],
        answerStyle: Options.answerStyles[0],
    })

    const close = useCallback(() => setShowOptions(false), []);
    useClickOutside(generatorRef, close);


    useEffect(() => {
        setQuestion(question)
    }, [question.id])

    useEffect(() => {
        setSelectedOptions({ ...selectedOptions, context: context })
    }, [context])

    useEffect(() => {
        setQuestions([...Questions.map((quest) => {
            if (quest.id == question.id) {
                quest = Question
            }
            return quest
        })])
    }, [Question])



    function removeItself() {
        setQuestions([...Questions.filter((q) => q.id != question.id)])
    }

    async function GenerateAnswer(question) {

        setShowOptions(false)
        if (!useKey) {

            if (credits == 0) return setError("You are out of credits!")
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ options: selectedOptions, useKey })

        }
        setisGenerating(true)

        let data = await fetch("./api/generateAnswer", options)
        data = await data.json()
        if (data.error) {
            setError(data.error.message)
            setisGenerating(false)

        }

        setQuestion({ ...Question, answer: data.result })
        setisGenerating(false)


        if (!useKey) setCredits(credits - 1)


    }

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 2000);
    }, [error])

    return (

        <div  className="question">

            <div className='quest'>
                <span onClick={() => setShowOptions(true)}> {Question.question} </span>  <button onClick={removeItself}>x</button>
            </div>
            {error != "" &&
                <div className="message error">{error}</div>
            }
            {!isGenerating && Question.answer != "" &&
                <p className='answer'>{Question.answer}</p>
            }
            {isGenerating && <strong>...</strong>}

            {showOptions &&
                <div ref={generatorRef} className="answer-generator-wrapper">
                    <div className="options">
                        {/* {Options.answerTones.map((prop, i) => <button className='option'>{prop}</button>)} */}
                        {Options.answerTones.map((prop, i) => <button key={i} onClick={() => setSelectedOptions({ ...selectedOptions, answerTone: prop })} className={`option ${prop == selectedOptions.answerTone ? "active" : ""}`}>{prop}</button>)}

                    </div>
                    <div className="options">
                        {Options.answerStyles.map((prop, i) => <button key={i} onClick={() => setSelectedOptions({ ...selectedOptions, answerStyle: prop })} className={`option ${prop == selectedOptions.answerStyle ? "active" : ""}`}>{prop}</button>)}
                    </div>
                    <button onClick={GenerateAnswer} className='generate-btn'>Generate Answer</button>
                </div>
            }
        </div>

    )
}
