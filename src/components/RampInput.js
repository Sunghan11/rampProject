import DateClock from './DateClock';
import React from 'react';

function RampInput(props) {
    const falsyVal = [undefined, null, NaN, 0, "", false];

    if (falsyVal.includes(props.input)) {
        return (
            <div className="input-result">
                <div id="input-content">
                    Input = {JSON.stringify(props.input)}
                </div>
                <h2 id="input-desc">Prop passed as Falsy Value</h2>
                <div id="clock">
                    <DateClock />
                </div>
            </div>
        )
    } else if (Array.isArray(props.input)) {
        if (props.input.length === 0) {
            return (
                <>  
                    <div id="input-content">
                        Input = {JSON.stringify(props.input)}
                    </div>
                    <h2 id="input-desc">Prop passed as Array</h2>
                    <div id="empty-array">Array is Empty</div>
                </>
            )
        }
    
        return (
            <div className="input-result">
                <div id="input-content">
                    Input = {JSON.stringify(props.input)}
                </div>
                <h2 id="input-desc">Prop passed as Array</h2>
                <div id="array">
                    <ul>
                        {
                            props.input.map((item, i) => (
                                <li key={i}>{JSON.stringify(item)}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="input-result">
                <div id="input-content">
                    Input = {(props.input)}
                </div>
                <h2 id="input-desc">Prop passed as anything else</h2>
                <div id="string">{props.input}</div>
            </div>
        )
    }
}

export default RampInput;