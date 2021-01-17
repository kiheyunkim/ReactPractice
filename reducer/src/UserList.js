import React, { useEffect } from 'react';

/* dep에 특정 값 넣기 */
function User({ user, onRemove ,onToggle}) {
    useEffect(()=>{
        //console.log(user);
        /*
            파라미터를 생략하면 컴포넌트가 리렌더될 때마다 호출이 됨.
            User를 사용하고 있는 생성된 모든 컴포넌트에 대한 user를 출력함.
        */
    });

    return (
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={()=>onToggle(user.id)}>{user.username}</b><span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user =>
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />   //배열로 렌더링 하는경우 고유의 key가 필요함. 없으면 렌더는 뜨는데 경고메세지가 뜸.
            )}
        </div>
    );
}

export default UserList;