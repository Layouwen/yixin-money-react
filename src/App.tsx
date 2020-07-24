import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
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
                </nav>

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

                    <Redirect exact from="/" to="/money" />
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
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
