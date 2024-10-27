import React from 'react'

export const TopPopup = ({showTopPopup,setshowTopPopup,TopPopupError,TopPopupmsg}) => {
    return (
        <>
            <div className={`toppopup ${showTopPopup ? "showTopPopup" : ""} ${TopPopupError ? "error" : "success"}`}>
                <div className="msg">
                    {TopPopupmsg}
                </div>
                <div className="closebtn" onClick={() => setshowTopPopup(false)}>X</div>
            </div>
        </>
    )
}
