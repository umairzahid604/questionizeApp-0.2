import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'



export const RandomGenerator = ({ list }) => {

    const [Items, setItems] = useState([])
    const [isCopied, setIsCopied] = useState("")
    const [Number, setNumber] = useState(2)


    function getRandomItems() {
        // Copy the original array to avoid modifying it
        var shuffledArray = list.slice();

        // Fisher-Yates shuffle algorithm
        for (var i = shuffledArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            // Swap elements
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        // Return the first n elements
        let RandomItems = shuffledArray.slice(0, Number);
        setItems(RandomItems)
    }


    function Copy(value) {
        setIsCopied(value)
        navigator.clipboard.writeText(value);
        setTimeout(() => {
            setIsCopied("")
        }, 1000);
    }


    function SaveFile() {
        let items = Items.map((item) => `${item}\n`).join("")

        const blob = new Blob([items], { type: 'text/plain' });

        // Create a URL for the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = `NerdyQAi.com - ${new Date(Date.now())}.txt`; // Set the desired file name

        // Trigger a click event on the anchor element
        anchor.click();

        // Clean up by revoking the Blob URL
        URL.revokeObjectURL(blobUrl);
    }

    return (

        <div className="tool-function">
            <div className="tool-actions">
                <div className="tool-button">
                    <input className='tool-slider' defaultValue={2} min={1} max={10} type="range" name="" id="" onChange={(e) => setNumber(e.target.value)} />
                </div>
                <button className='tool-button' onClick={getRandomItems}>Generate {Number}</button>
                <button className='tool-button' onClick={SaveFile}>Save As Txt</button>
            </div>

            {Items.map((item, i) => {
                return (
                    <>
                    <div key={i} className="list-item" onClick={() => Copy(item)}>{isCopied == item ? "Copied!" : item}</div>
                    </>
                )
            })
            }

            {Items.length == 0 &&
                <p style={{ marginLeft: "50px" }}>(Guide: Move the slider, Press the "Generate" Button, Click to Copy or Press "Save As TxT" to Save. )</p>
            }



        </div>

    )
}
