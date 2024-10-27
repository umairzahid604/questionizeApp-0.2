import React from 'react'

export const Popup = ({showPopup,setshowPopup,TopPopupError,setapiKeyInput,ApiKeyConfiguredHandler}) => {
    return (
        <>
            <div className={`popupWrapper ${showPopup ? "show" : ""} ${TopPopupError ? "error" : "success"} `}>
                <div className="popupBox">
                    <button className='closeBtn' onClick={() => { setshowPopup(false) }}>X</button>
                    <h3>Unlock All <span className='mainKeyword'>Premium</span>  Features For <span className='mainKeyword'>Free!</span> </h3>
                    <div className="feature"> <span className='icon'>🎯</span>Add Upto 1000 Words</div>
                    <div className="feature"> <span className='icon'>🎯</span>Generate Upto 25 Questions</div>
                    <div className="feature"> <span className='icon'>🎯</span>Generate Upto 25 Answers</div>
                    <div className="feature"> <span className='icon'>🎯</span>Generate Customize Answers</div>
                    <div className="feature"> <span className='icon'>🎯</span>Generate Questions by PDF (coming soon)</div>
                    <div className="feature"> <span className='icon'>🎯</span>Specify Tone of Questions (coming soon)</div>
                    <div className="actions">
                        {/* <h4>Add Your OpenAI ApiKey</h4>           */}
                        <input type="text" placeholder='Enter your OpenAI ApiKey' onChange={(e) => { setapiKeyInput(e.target.value) }} />
                        <button onClick={() => {
                            setapiKeyInput("")
                            ApiKeyConfiguredHandler()

                        }}>Add Api Key</button>
                    </div>
                </div>
            </div>
        </>
    )
}
