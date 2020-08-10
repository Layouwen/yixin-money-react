import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {setTags([...tags, tagName]);}
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => onToggleTag(tag)} className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新建标签</button>
    </Wrapper>
  );
};

export {TagsSection};