import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Allwork from './components/allwork/Allwork';
import BallBreakOut from './components/ballbreakout/BallBreakOut';
import Covid from './components/covid/Covid';
import Detail from './components/detail/Detail';
import FallBall from './components/fallBall/FallBall';
import GameHome from './components/games/GameHome';
import Graph from './components/graph/Graph';
import Home from './components/home/Home';
import SpinnerBasic from './components/spinnerBasic/SpinnerBasic';
import Record_in_out from './components/record/Record_in_out';
import Facebook from './components/facebook/Facebook';


function App() {
  return (
    <div >
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/allwork">
            <Allwork/>
          </Route>

          <Route path="/covid">
            <Covid/>
          </Route>

          <Route path="/detail">
            <Detail/>
          </Route>

          <Route path="/graph">
            <Graph/>
          </Route>

          <Route path="/games">
            <GameHome/>
          </Route>

          <Route path="/spinnerbasic">
            <SpinnerBasic/>
          </Route>

          <Route path="/fallball">
            <FallBall/>
          </Route>

          <Route path="/ballbreakout">
            <BallBreakOut/>
          </Route>

          <Route path="/record">
            <Record_in_out/>
          </Route>
          
          <Route path="/facebook">
            <Facebook/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
