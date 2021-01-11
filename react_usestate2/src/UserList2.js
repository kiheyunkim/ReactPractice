import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList2(){
    const users = [
        {
            id:1,
            username:'velopert',
            email:'public.velopert@gmail.com'
        },
        {
            id :2,
            username:'tester',
            email:'teser@example.com'
        },
        {
            id:3,
            username:'liz',
            email:'liz@example.com'
        }
    ];

    return (
        <div>
            {users.map(user=>
                <User user={user} key={user.id}/>   //배열로 렌더링 하는경우 고유의 key가 필요함. 없으면 렌더는 뜨는데 경고메세지가 뜸.
            )}
        </div>
    );
}

export default UserList2;