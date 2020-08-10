import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    padding: 0 16px;
    line-height: 72px;
    font-size: 36px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
    background: #fff;
  }
  > .pad {
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      background: skyblue;
      &.ok {
      float: right;
        height: 128px;
      }
      &.zero {
         width: 50%;
      }
    }
  }
`;

export {Wrapper}