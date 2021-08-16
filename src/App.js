import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/New-meetup'>
        <NewMeetup />
      </Route>
      <Route path='/Favorites'>
        <Favorites />
      </Route>
    </Switch>
    
  </div>;


}

export default App;
