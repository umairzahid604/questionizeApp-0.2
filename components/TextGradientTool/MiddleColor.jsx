import React from 'react'
import { useState, useEffect } from 'react'
import { SketchPicker } from 'react-color'

export const AddMiddleColor = ({ MiddleColor, MiddleColors, setMiddleColors }) => {
    const [color, setColor] = useState(MiddleColor)
    const [showPiker, setShowPiker] = useState(false)


    function ColorChangeHandler(clr) {
        // alert(color.hex)
        setColor({ ...color, value: clr.hex })
    }

    function getContrastColor(hexColor) {
        // if(!hexColor) return
        // Convert hex color to RGB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Determine if color is dark or light
        return luminance > 0.5 ? 'black' : 'white';
    }

    function RemoveItself(){
        setMiddleColors([...MiddleColors.filter((clr)=> clr.id != MiddleColor.id)])
    }

    useEffect(() => {
        setMiddleColors([...MiddleColors.map((clr) => {
            if (clr.id == color.id) {
                clr.value = color.value
                clr.position = color.position
            }
            return clr
        })])
    }, [color])

    useEffect(() => {
        setColor(MiddleColor)
    }, [MiddleColor.id])




    return (
        <div className='color'>
            <div className="position">
                <div> Position <strong>{color.position}%</strong>
                    <button onClick={RemoveItself}>X</button>

                </div>
                <input value={color.position} min={0} max={100} type="range" name="" id="" onChange={(e) => setColor({ ...color, position: e.target.value })} />
            </div>
            <div style={{ backgroundColor: color.value }} className="value" onClick={() => setShowPiker(showPiker ? false : true)}>
                <div style={{ color: getContrastColor(color?.value) }}>{color.name} Value <strong>{color.value}</strong></div>
            </div>
            {showPiker &&
                <SketchPicker color={color.value} onChange={ColorChangeHandler} />
            }
        </div>


    )
}
