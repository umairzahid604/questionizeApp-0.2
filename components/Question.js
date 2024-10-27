import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'


export const Question = ({ Questions,question, apiKey, text }) => {
  const [answer, setanswer] = useState("")
  const [answergen, setanswergen] = useState(false)

  const answerTones = ["Informational", "Narrative", "Thoughtful", "Creative", "Humorous",]
  const answerStyle = ["Quick Answer", "Long Answer", "100 words long", "300 words long"]

  const [AnswerProps, setAnswerProps] = useState({ tone: answerTones[0], style: answerStyle[0] })
  const [showProps, setshowProps] = useState(false)



  function GenerateAnswer(question) {
    setanswergen(true)
    fetch("./api/generateAnswer",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question, apiKey: apiKey, answerProps: AnswerProps, text: text })
      }).then(data => data.json()).then(data => {

        if (data.error) return setanswer("Oops! An Error occured. Please try again")

        setanswer(data.result)
      }
      )
    setanswergen(false)

  }

  useEffect(() => {
    setanswer("")
    setshowProps(false)


  }, [Questions])


  return (
    <div className="questionWrapper">

      <div className="question">
        {question}
        <button onClick={() => {
          if (apiKey != "") {
            GenerateAnswer(question)
          }
          else {
            if (showProps) {
              setshowProps(false)
            }
            else {
              setshowProps(true)
            }
          }

        }}>Answer</button>
      </div>

      <div className={`answerProps ${showProps ? "show" : "hide"} `}>
        <h5>Tone</h5>
        <div className="propsSection">
          {answerTones.map((tone) => {
            return (<button className={`${AnswerProps.tone == tone ? "active" : ""}`} onClick={() => setAnswerProps({ ...AnswerProps, tone: tone })}>{tone}</button>)
          })}
        </div>

        <h5>Style</h5>
        <div className="propsSection">
          {answerStyle.map((style) => {
            return (<button className={`${AnswerProps.style == style ? "active" : ""}`} onClick={() => setAnswerProps({ ...AnswerProps, style: style })}>{style}</button>)
          })}

        </div>
        <button onClick={() => {
          GenerateAnswer(question)
        }}>Generate Answer</button>

      </div>

      {answer != "" &&
        <div className="answer">{answergen ? <div className='thinking-wrapper'><Image width={40} height={40} alt="Generating" className='thinking' src='/thinking-robot.png' /> ....</div> : answer.trim()}</div>
      }

    </div>)
}
