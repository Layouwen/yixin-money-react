import styled from 'styled-components';
import React, {useRef} from 'react';

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
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" ref={refInput} defaultValue={note} onBlur={onBlur} placeholder="请输入备注"/>
      </label>
    </Wrapper>
  );
};

export {NotesSection};