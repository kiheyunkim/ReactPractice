import React, { useRef, useState } from 'react';

function LoginSampleWithRef() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();     //DOM에 즉시 직접 접근해야하는 경우 Ref를 사용한다. class에서는 createRef, 함수형에서는 useRef를 사용
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

        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}  ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default LoginSampleWithRef;