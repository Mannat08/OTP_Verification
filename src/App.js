import PhoneVerification from "./component/PhoneVerification"
import './App.css';
import ValidUser from "./component/ValidUser";
import {BrowserRouter, Switch,Route} from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //  <PhoneVerification/>
    // </div>
    <BrowserRouter>
  
  <div className="App">
  <Switch>
    <Route exact path="/" component={PhoneVerification}></Route>
    <Route exact path="/verified" component={ValidUser}></Route>
  </Switch>
  </div>
 
  </BrowserRouter>
  );
}

export default App;
