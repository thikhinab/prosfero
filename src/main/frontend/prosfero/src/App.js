import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useMemo, useState } from 'react'

import Profile from './pages/Profile'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { UserContext } from './utils/UserContext'
import Welcome from './pages/Welcome';
import WelcomeRouter from './utils/WelcomeRouter';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/registration' exact component={Registration} />
          <Route path='/welcome' exact component={Welcome} />
          <Route path='/' component={WelcomeRouter} />
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
