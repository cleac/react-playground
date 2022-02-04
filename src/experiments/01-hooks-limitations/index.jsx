import { useState, useEffect } from "react";
import "../../App.css";

let secondsPassed = 0;
setInterval(() => {
    secondsPassed += 1
}, 1000);

export const HooksLimitationUseEffect = () => {
    const [value, setValue] = useState(1);
    const someConstant = 1;
    useEffect(() => {
        console.log('I will fire each time value is updated');
    }, [value]);
    useEffect(() => {
        console.log('I will fire once each time the component is used');
    }, [someConstant]);
    useEffect(() => {
        console.log(`I will fire each time outside variable is updated: seconds passed ${secondsPassed}`)
    }, [secondsPassed]);
    return (
        <div className="Box">
            <div><b>Effects play</b></div>
            <div style={{ display: "none" }}>{value}</div>
            <button onClick={() => setValue(value + 1)}>Trigger rerender</button>
        </div>
    )
}

export const HooksLimitationInadequateOrder = () => {
    const [value, setValue] = useState(1);
    for (let i = 0; i < Math.random() * 10; i++) {
        useState(5);
    }
    for (let i = 0; i < Math.random() * 5; i++) {
        const temp = i;
        useEffect(() => { console.log(temp); });
    }
    for (let i = 0; i < Math.random() * 10; i++) {
        useState(5);
    }
    return (
        <div className="Box">
            <div><b>Inadequate hook orders</b></div>
            <div style={{ display: "none" }}>{value}</div>
            <button onClick={() => setValue(value + 1)}>Trigger rerender (don't click, will break everything)</button>
        </div>
    )
}