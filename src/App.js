import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Product from './Screens/Product';
import Software from'./Screens/Software';
import BuyNow from './Contents/BuyNow';
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

function App() {
  return (
	<BrowserRouter>
		<NavBar/>
		{/* <Routes>
			<Route path="/" Component={Home}/> 
			<Route path='/Product' Component={Product}/>
			<Route path='/Software' Component={Software}/>
			<Route path='/BuyNow' Component={BuyNow}/>
			<Route path='/AboutUs' Component={AboutUs}/>
			<Route path='/Contact' Component={Contact}/>
		</Routes> */}
	</BrowserRouter>
     
  );
}

export default App;

 