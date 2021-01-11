import React from 'react';

/*function Hello(props){
    return <div style={{color:props.color}}>안녕하세요 {props.name}</div>
}*/
//같은 의미
function Hello({color, name, isSpecial}){
    return (
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name}
        </div>
    )
}

//props에 대해서 기본값을 정할 수 있음.
Hello.defaultProps = {
    name:'이름없음'
}

export default Hello;