import React, { useCallback, useMemo, useRef } from "react";
import UserList from "./UserList";
import CreateUser from './CreateUser';
let countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function App() {
    const [inputs, setInputs] = React.useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;

    const onChange = useCallback(
        e => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value
            });
        },
        [inputs]
    )
    /*
        위의 함수들을 그냥 선언해둔 경우에는 리렌더링 될 때마다 새로 만들어짐.
        하지만 useCallback을 사용하게 되면 함수를 다시 만들지 않고 재사용할 수 있도록 만들어줌.
    */

    const [users, setUsers] = React.useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'teser@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: true
        };

        setUsers([...users, user]);

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }, [users, username, email]);

    const onRemove = useCallback((id) => {
        setUsers(users.filter(user => user.id !== id));
    });

    const onToggle = (id) => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user)
        )
    }

    /*
        const count = countActiveUsers(users);
        위와 같이 처리해둔다면 input 값을 바꿀 때도 couterActive를 계속 호출하게 됨. 따라서 useMeno = use Memorized라는 Hook 함수를 사용하면 됨.
    */
    const count = useMemo(() => countActiveUsers(users), [users]);
    /*
        위와 같이 표현한다면 [dept]에 들어있는 값이 변했을 때만 앞에있는 함수를 통해서 값을 변경시킨다는 의미이다. 성능이 좋아짐.
    */
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;
