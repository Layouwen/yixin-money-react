import styled from 'styled-components';
import React from 'react'

const _TagsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: self-start;
  flex-grow: 1;
  padding: 12px 16px;
  background: #fff;
  > ol {
    margin: 0 -12px;
      > li {
        padding: 3px 18px;
        margin: 8px 12px;
        display: inline-block;
        font-size: 14px;
        border-radius: 18px;
        background: #d9d9d9;
      }
  }
  > button {
    padding: 2px 4px;
    margin-top: 8px;
    color: #666;
    border: none;
    border-bottom: 1px solid #333;
    background: none;
  }
`

const TagsSection: React.FunctionComponent = () => {
  return (
    <div>
      <_TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新建标签</button>
      </_TagsSection>
    </div>
  )
}



export {TagsSection}