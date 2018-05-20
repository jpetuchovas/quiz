import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import QuizPage from './components/quiz/QuizPage';
import store from './store';
import ResultContainer from './components/result/ResultContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={QuizPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/result" component={ResultContainer} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
