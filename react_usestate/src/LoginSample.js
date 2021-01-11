import React, { useState } from 'react';

function LoginSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs;   //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,      //기존의 input 객체를 복사한 뒤 (spread)
            [name]: value   //name이라는 키를 가진 값을 value로 설정 immutable을 유지하며 변경하는 방법
            //inputs[name] = value로는 절대 수정하면 안됨.
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default LoginSample;