import logo from '../logo.svg';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
