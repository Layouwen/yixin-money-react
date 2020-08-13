import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  > li {
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 20px;
    border-bottom: 1px solid #d5d5d9;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 8px 13px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #f60;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
}

export default Tags;