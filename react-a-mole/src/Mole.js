import React, { useEffect } from "react";
import molepng from './mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds);
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={molepng}
                onClick={props.handleClick} />
        </div>
    )
}

export default Mole