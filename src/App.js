
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadersPage from './Componets/Header/Heder';
import FirstPage from './Componets/MaxfirstPage';
import ThirdPage from './Componets/ThirdPage/Third';
import Fourth from './Componets/FourthPage/Fourth';
import Five from './Componets/FivePage/Five';
// import FooterPage from './Componets/FooterPart/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
     <HeadersPage/>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path= "/thirdPage" component={ThirdPage} />
          <Route path= "/Fourth" component={Fourth} />
          <Route path= "/Five" component={Five} />
        </Switch>   
      </Router>   
    </div>
  );
}
export default App;
