import styled from 'styled-components';

const NotesSection = styled.section`
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
`

export {NotesSection}