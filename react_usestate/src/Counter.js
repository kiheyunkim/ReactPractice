import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    /*
        const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberState[1];
        위와 동일한 의미로 표현하자면 이렇게 됨. 위는 비구조화 할당을 통해 만든 것임.
    */

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = ()=>{
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;