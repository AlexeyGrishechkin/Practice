import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LOGIN_LINK, TIMER_LINK } from '../components/Links';
import Loader from '../components/Loader';
import { Sidebar } from '../components/Sidebar';
import { Exercise1 } from '../Exercise 1';
import './styles.css';

const Timer = React.lazy(() => import('../Exercise 5'));

export const App = () => {
  return (
    <div className='main-wrapper'>
      <Sidebar>
        {LOGIN_LINK}
        {TIMER_LINK}
      </Sidebar>
      <Switch>
        <Route exact path='/' component={Exercise1} />
        <Route
          path='/timer'
          render={() => {
            return (
              <Suspense fallback={<Loader />}>
                <Timer />
              </Suspense>
            );
          }}
        />
      </Switch>
    </div>
  );
};
