import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import UserLogin from "./components/user/UserLogin";
import EmployeeList from "./components/user/EmployeeList";
import { Switch, Route, Redirect} from 'react-router-dom'
import Routing from '../src/components/user/Routing'

const App = () => {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Routing exact path="/" component={EmployeeList}/>
      <Route exact path="/login" component={UserLogin} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer/>
    </div>
      
  );
}

export default App;
