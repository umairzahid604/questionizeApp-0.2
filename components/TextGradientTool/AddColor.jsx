import React from 'react'
import { useState, useRef } from 'react'
import { SketchPicker } from 'react-color'

export const AddColor = ({ color, setColor }) => {
    const [showPiker, setShowPiker] = useState(false)
    const ColorRef = useRef(null)

    function ColorChangeHandler(clr) {
        setColor({ ...color, value: clr.hex })
    }

    function getContrastColor(hexColor) {
        // Convert hex color to RGB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Determine if color is dark or light
        return luminance > 0.5 ? 'black' : 'white';
    }





    return (
        <div className='color'>
            <div className="position">
                {color?.position &&
                    <>
                        <div> Position <strong>{color.position}%</strong></div>
                        <input value={color.position} min={0} max={100} type="range" name="" id="" onChange={(e) => setColor({ ...color, position: e.target.value })} />
                    </>
                }
            </div>
            <div ref={ColorRef} style={{ backgroundColor: color.value }} className="value" onClick={() => setShowPiker(showPiker ? false : true)}>
                <div style={{ color: getContrastColor(color.value) }}>{color.name} Value <strong>{color.value}</strong></div>
            </div>
            {showPiker &&

                <SketchPicker color={color.value} onChange={ColorChangeHandler} />
            }
        </div>


    )
}
