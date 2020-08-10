import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      position: relative;
      padding: 16px 0;
      width: 50%;
      text-align: center;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 3px;
        width: 100%;
        background: #333;
      }
    }
  }
`


const CategorySection: React.FC = ()=>{
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  )
}

export {CategorySection}