import Layout from '../components/Layout';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  useEffect(() => {
    setTimeout((
      setSelected({...selected, amount: 1000})
    ), 3000);
  }, []);
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NotesSection value={selected.note}
                    onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={value => onChange({amount: value})}
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;