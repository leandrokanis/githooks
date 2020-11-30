import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReposPage from './pages/repos-page'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/repos" component={ReposPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}