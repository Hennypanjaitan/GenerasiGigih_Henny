import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Playlist } from './pages/homework';
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
            <Playlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;