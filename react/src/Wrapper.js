import React from 'react';

function Wrapper({children}){
    const style={
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {children}  {/* 내부에 있는 요소들을 표시해주고 싶다는 의미 */}
        </div>
    )
}

export default Wrapper;