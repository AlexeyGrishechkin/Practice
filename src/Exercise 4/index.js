import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LOGIN_FORM_PAGE_ROUTE, TIMER_FORM_PAGE_ROUTE } from '../constants/links';
import { RouteLink } from '../components/Link';
import Loader from '../components/Loader';
import { Sidebar } from '../components/Sidebar';
import { Exercise1 } from '../Exercise 1';
import './styles.css';

const Timer = React.lazy(() => import('../Exercise 5'));

export const App = () => {
  return (
    <div className='main-wrapper'>
      <Sidebar>
        <RouteLink to={LOGIN_FORM_PAGE_ROUTE} name='Login form' />
        <RouteLink to={TIMER_FORM_PAGE_ROUTE} name='Timer' />
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
