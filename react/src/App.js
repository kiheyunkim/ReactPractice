import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,//기본단위 px
    padding: '1rem'
  };

  return (
    <>
      {/*주석은 화면에 보이지 않음*/}
      /*여기는 주석처리가 되지 않음*/
      <Wrapper>
        <Hello name="react" color ="red" isSpecial={true}/>  
        <Hello color ="pink"/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
    </>
  );
}

export default App;