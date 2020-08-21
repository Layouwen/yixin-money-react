import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 10px 16px;
  background: #f5f5f5;
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}/>
    </Wrapper>
  );
};

export {NotesSection};