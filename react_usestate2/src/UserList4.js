import React, { useEffect } from 'react';

/* dep에 특정 값 넣기 */
function User({ user, onRemove ,onToggle}) {
    useEffect(()=>{
        console.log('user 값이 설정됨');
        console.log(user);
        return ()=>{
            console.log('user가 바뀌기 전..');
            console.log(user);
        };
    },[user]);
    /*
        deps에 특정 값을 넣게 되면 컴포넌트가 처음 마운트 될때 호출이 되고, 지정한 값이 바뀔 떄에도 호출이 됨
        deps안에 특정 값이 있다면 언마운트시에도 호출이 되고, 값이 바뀌기 직전에도 호출이 됨.
    */
    /*
        useEffect 안에서 사용하는 상태나, props가 있다면 useEffect의 deps에  넣어주어야함. 
        만약 넣지 않으면 useEffect에 등록한 함수가 실행 될 때 최신 props/상태를 가르키지 않게 됨.!!!!
    */

    return (
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={()=>onToggle(user.id)}>{user.username}</b><span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList4({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user =>
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />   //배열로 렌더링 하는경우 고유의 key가 필요함. 없으면 렌더는 뜨는데 경고메세지가 뜸.
            )}
        </div>
    );
}

export default UserList4;