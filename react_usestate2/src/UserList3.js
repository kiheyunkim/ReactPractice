import React, { useEffect } from 'react';

function User({ user, onRemove ,onToggle}) {
    useEffect(()=>{     //useEffect를 사용할 때는 함수, 의존값이 들어있는 배열(de[s)을 넣음
        console.log('컴포넌트가 화면에 나타남');
        /*
            마운트 시에는 다음과 같은 경우에 사용
            1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
            2. 외부 API 요청(REST API 등)
            3. 라이브러리 사용(D3, Video.js 등)
            4. setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
        */
        return ()=>{        //useEffect에서는 이와같은 함수를 반환하게 되는데 cleanup함수라 부르며
                            // useEfect에 대한 뒷정리를 하며 deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됨.
            /*
                언마운트할 떄 하는 작업은 다음과 같음
                1. setInterval, setTimeout을 사용하여 등록한 작업들 clear하기(clearInterval, clearTimeolut)
                2. 라이브러리 인스턴스 제거
            */
            console.log('컴포넌트가 화면에서 사라짐');
        };
    },[]);//deps배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출됨.

    return (
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={()=>onToggle(user.id)}>{user.username}</b><span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList3({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user =>
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />   //배열로 렌더링 하는경우 고유의 key가 필요함. 없으면 렌더는 뜨는데 경고메세지가 뜸.
            )}
        </div>
    );
}

export default UserList3;