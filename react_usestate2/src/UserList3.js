import React from 'react';

function User({ user, onRemove ,onToggle}) {
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