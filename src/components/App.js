import React, {useState} from "react";
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from '../components/ui/Footer'
import LandingPage from "./LandingPage";



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
   <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
   <Switch>
     <Route exact path="/" component={LandingPage}></Route>
     <Route exact path="/services" component={()=><div> services</div>}></Route>
     <Route exact path="/customsoftware" component={()=><div> customsoftware</div>}></Route>
     <Route exact path="/mobileapps" component={()=><div> mobileapps</div>}></Route>
     <Route exact path="/websites" component={()=><div> websites</div>}></Route>
     <Route exact path="/revolution" component={()=><div> revolution</div>}></Route>
     <Route exact path="/about" component={()=><div> about</div>}></Route>
     <Route exact path="/contact" component={()=><div> contact</div>}></Route>
     <Route exact path="/estimate" component={()=><div> estimate</div>}></Route>
   </Switch>
   <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
   </BrowserRouter>
    
    </ThemeProvider>
   
  );
}

export default App;
