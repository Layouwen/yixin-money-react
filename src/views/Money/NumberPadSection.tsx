import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    padding: 0 16px;
    line-height: 72px;
    font-size: 36px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
    background: #fff;
  }
  > .pad {
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      background: skyblue;
      &.ok {
      float: right;
        height: 128px;
      }
      &.zero {
         width: 50%;
      }
    }
  }
`

const NumberPadSection: React.FC = ()=>{
  return (
    <Wrapper>
      <div className="output">100</div>
      <div className="pad">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection}