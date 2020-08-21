import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout';
import {Button} from '../components/Button';
import Icon from '../components/Icon';

type Params = {
  id: string
}

const Tag: React.FC = () =>{
  const {findTag} = useTags()
  let {id} = useParams<Params>()

  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <header>
        <Icon name="left"/>
        <span>删除标签</span>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"/>
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
}

export {Tag}