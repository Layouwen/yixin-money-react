import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 14px 16px;
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
      <Input label="备注" type="text" value={note} onChange={onChange} placeholder="请输入你的备注"/>
    </Wrapper>
  );
};

export {NotesSection};