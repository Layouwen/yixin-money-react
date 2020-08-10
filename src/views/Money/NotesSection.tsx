import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 10px 16px;
  background: #f5f5f5;
  > label {
      display: flex;
      align-items: center;
      > span {
        padding-right: 16px;
        white-space: nowrap;
      }
      > input {
        width: 100%;
        border: none;
        background: none;
      }
  }
`

const NotesSection: React.FC = ()=> {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () =>{
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" ref={refInput} defaultValue={note} onBlur={onBlur} placeholder="请输入备注"/>
      </label>
    </Wrapper>
  )
}

export {NotesSection}