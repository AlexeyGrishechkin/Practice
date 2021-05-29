import React, { Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Sidebar } from '../components/toggleSidebar';
import { Exercise1 } from '../Exercise 1';
import './styles.css';

const Timer = React.lazy(() => import('../Exercise 5'));

export const App = () => {
  return (
    <div className='main-wrapper'>
      <Sidebar>
        <p>
          <Link to='/'>Login form</Link>
        </p>
        <p>
          <Link to='/timer'>Timer</Link>
        </p>
      </Sidebar>
      <Switch>
        <Route exact path='/' component={Exercise1} />
        <Route
          path='/timer'
          render={() => {
            return (
              <Suspense fallback={<h3 style={{ margin: '0 auto' }}>Loading...</h3>}>
                <Timer />
              </Suspense>
            );
          }}
        />
      </Switch>
    </div>
  );
};
