import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
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
        &.selected {
          background: #f60;
        }
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
`;

type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {setTags([...tags, {id: createId(), name: tagName}]);}
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新建标签</button>
    </Wrapper>
  );
};

export {TagsSection};