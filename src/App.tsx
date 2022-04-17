import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Homepage } from './pages/homework/index.tsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/create-playlist">
            <CreatePlaylist />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;