import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
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
const CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      position: relative;
      padding: 16px 0;
      width: 50%;
      text-align: center;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 3px;
        width: 100%;
        background: #333;
      }
    }
  }
`
const NumberPadSection = styled.section`
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
`

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新建标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="请输入备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">100</div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money;