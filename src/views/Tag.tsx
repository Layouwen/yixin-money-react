import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from 'components/Button';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from '../components/Space';

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`;
const InputWrapper = styled.div`
  margin-top: 8px;
  padding: 0 16px;
  background: #fff;
`;
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();

  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑页面</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
  );
};

export {Tag};