import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import QuizPage from './components/quiz/QuizPage';
import ResultContainer from './components/result/ResultContainer';
import StartPage from './components/start/StartPage';

const Routes = () => (
  <Router>
    <App>
      <Route exact path="/" component={StartPage} />
      <Route path="/start" component={StartPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/result" component={ResultContainer} />
    </App>
  </Router>
);

export default Routes;
