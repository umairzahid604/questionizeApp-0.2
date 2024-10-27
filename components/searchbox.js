import React from 'react'

export const Searchbox = ({Words,limitWords,Input}) => {
  return (
    <div id='searchBox' className="searchBox" data-aos="fade-up">
    <div className="limit">{Words}/{limitWords}</div>
    <textarea name="" id="" value={Input} cols="30" rows="10" placeholder='Paste Your text here' onChange={searchBoxValuehandler}></textarea>
    {apiKey != "" &&
      <>
        <div className="questiontones">
          {questionsTones.map((tone, i) => {
            return (<button className={`${QuestionTone == tone ? "active" : ""}`} key={i} onClick={() => setQuestionTone(tone)}>{tone}</button>)
          })}
        </div>
        <div className="questiontones">
          {questionsQtys.map((qty, i) => {
            return (<button className={`${QuestionQty == qty ? "active" : ""}`} key={i} onClick={() => setQuestionQty(qty)}>{qty}</button>)
          })}
        </div>
      </>
    }

    <button onClick={() => {
      setQgenerating(true)

      if (Words <= limitWords && Input.trim() != "") {
        extractQuestions(Input)

      } else {
        setshowTopPopup(true)
        setTopPopupmsg("Please Enter Text !")
        setTopPopupError(true)
        setQgenerating(false)
      }

    }}>{Qgenerating ? <><Image width={40} height={40} alt="hello" className='thinking' src='/thinking-robot.png' /> ....</> : "Generate Questions"}</button>
  </div>
    )
}
