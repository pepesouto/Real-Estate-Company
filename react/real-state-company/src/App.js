import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// ------COVER
// import BarComponent from "./components/BarComponent";
// import RecommendationComponent from "./components/RecommendationComponent";
// ------COVER


import './App.css';
import "./css/reset.css";
import "./css/coverStyle.css";

// -----RESULTS
// import "./css/search-result.css";
// import RecordComponent from './components/RecordComponent';
// import SearchResultBoxComponent from './components/SearchResultBoxComponent';
// -----RESULTS


// -----POST
import SliderComponent from "./components/SliderComponent";
import ContactComponent from "./components/ContactComponent";
import InnerHeaderComponent from "./components/InnerHeaderComponent";
import "./css/postStyle.css";
import MainInfoComponent from './components/MainInfoComponent';
import DataSheetComponent from './components/DataSheetComponent';
import AmenitiesComponent from './components/AmenitiesComponent';
import DescriptionComponent from './components/DescriptionComponent';
// -----POST

class App extends Component {
  
  render() {
    return (

// -----COVER
      // <div className="App">
      //   <HeaderComponent/>
      //   <article className="box">
      //     <section className="slogan">
      //         <h1>Alquiler y venta de apartamentos y casas en Uruguay</h1>
      //     </section>        
      //     <BarComponent/>
      //   </article>
      //   <RecommendationComponent/>     
      //   <FooterComponent/>
      // </div>
// -----COVER

// -----RESULTS
      // <div>
      //   <HeaderComponent></HeaderComponent>  
      //   <nav className="browserbox">
      //     <input className="browser" name="browser" type="text" placeholder="e.i New York City"/>
      //   </nav>
      //   <RecordComponent></RecordComponent>
      //   <div className="container">
      //     <SearchResultBoxComponent></SearchResultBoxComponent>
      //     <div className="mapbox" id="map"></div>
      //   </div>
      //   <FooterComponent></FooterComponent>
      // </div>

// -----RESULTS

// -----POST
        <div id="body">
          <HeaderComponent></HeaderComponent>
          <header className="innerHeader">
                <h1 className="postTitle"id="postTitle">Post Title</h1>
          </header>
          <InnerHeaderComponent></InnerHeaderComponent>
          <div  className="box">
              <SliderComponent></SliderComponent>
              <ContactComponent></ContactComponent>
          </div> 
          <div className="infobox">
              <MainInfoComponent></MainInfoComponent>
              <DataSheetComponent></DataSheetComponent>
              <AmenitiesComponent></AmenitiesComponent>
              <DescriptionComponent></DescriptionComponent>
          </div>
          <FooterComponent></FooterComponent>
        </div>
// -----POST

    );
  }
}

export default App;
