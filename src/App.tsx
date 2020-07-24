import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from 'components/Nav'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.div`
  flex: 1;
  overflow: auto;
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
                <Nav/>
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
