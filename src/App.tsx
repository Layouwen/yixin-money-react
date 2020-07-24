import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.div`
  flex: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 1px solid;
  > ul {
    display: flex;
    > li {
      padding: 16px 0;
      width: 33.333%;
      text-align: center;
      > a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>

                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}

function Money() {
    return <h2>记账</h2>;
}

function Tags() {
    return <h2>标签</h2>;
}

function Statistics() {
    return <h2>统计</h2>;
}

function NoMatch() {
    return <div>你输入的问题有错</div>
}


export default App;
