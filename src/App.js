import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import AiPage from "./components/AiPage/AiPage";
import Faqs from "./components/Faqs/Faqs";
import AboutUs from "./components/AboutUs/AboutUs";
import MenuRecPage from "./components/MenuRecPage/MenuRecPage";
import AllergyPage from "./components/allergy/allergy";
import HomeMakerPage from "./components/HomeMaker/HomeMaker";
import PosterMakingPage from "./components/posterMaking/posterMaking";
import ChatBot from './components/ChatBotPage/ChatBotPage';
import MenuTranslator from './components/MenuTranslator/MenuTranslator';
import NutritionTeller from './components/NutritionTeller/NutritionTeller';
import Navbar from './components/TopNavbar/Navbar'
import Notifications from './components/Notifications/Notifications';
import WhomToSell from './components/WhomToSell/WhomToSell';
import PricePredictor from './components/PricePredictor/PricePredictor';
import artificial from './components/artificial-Intelligence/artificial';
import ContactUs from './components/ContactUs/ContactUs';
import Contributer from './components/Contributer/Contributer';


class App extends React.Component {

  render(){
    return (
      <BrowserRouter >
	  		<Navbar/>
				
				<Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/aipage" component={AiPage} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/menu-rec" component={MenuRecPage} />
          <Route path="/allergy" component={AllergyPage} />
          <Route path="/homemaker" component={HomeMakerPage} />
          <Route path="/postermake" component={PosterMakingPage} />
          <Route path='/chatbot' component={ChatBot} />
          <Route path='/menu-translator' component={MenuTranslator} />
          <Route path='/nutrition-teller' component={NutritionTeller} />
          <Route path='/notifications' component={Notifications}/>
          <Route path='/whom-to-sell' component={WhomToSell} />
          <Route path='/price-predictor' component={PricePredictor} />      
          <Route path='/artificial-intelligence' component={artificial}/>
          <Route path= '/contact-us' component={ContactUs} />
          <Route path= '/contributer' component={Contributer} />
				</Switch>
				
			</BrowserRouter>
    );
  }
 
}

export default App;
