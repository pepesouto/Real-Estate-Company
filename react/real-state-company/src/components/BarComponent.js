import React, { Component } from 'react';
import {Link} from "react-dom";
import { Switch, Router } from 'react-router-dom';
import "./../css/barStyle.css";

class BarComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      operationType: "Sale",
      propertyType: "House",
      zoneId: ""
    }
  }

  changeOperation = (event) => {
    this.setState({
      operationType: event.target.value
    })
  }
  changeProperty = (event) => {
    this.setState({
      propertyType: event.target.value
    })
  }
  changeZone = (event) => {
    this.setState({
      zoneId: event.target.value
    })
  }

  componentDidMount(){
    console.log(this.state);
  }


  render() {
    return (
      <article className="mainbox">
        <section className="slogan">
          <h1>Alquiler y venta de apartamentos y casas en Uruguay</h1>
        </section>
        <form className="bar">
          <div className="innerbox">
            <select className="operation" value={this.state.operationType} onChange={this.changeOperation} name="operationType" id="operationId">
              <option value="Sale">Venta</option>
              <option value="Rent">Alquiler</option>
              <option value="Temporary">Alquiler Temporal</option>
            </select>
            <select className="property" value={this.state.propertyType} onChange={this.changeProperty} name="propertyType" id="typeId">
              <option value="House">Casas</option>
              <option value="Apartment">Apartamentos</option>
              <option value="Land">Terrenos</option>
              <option value="locales">Locales Comerciales</option>
              <option value="oficinas">Oficinas</option>
            </select>
          </div>
          <input className="ubication" value={this.state.zoneId} onChange={this.changeZone} id="zoneId" type="text" name="zoneId" placeholder="Ubicacion ej: Pocitos, Montevideo" />

          <button className="btn" id="buscar">Buscar</button>
        </form>
      </article>
    )
  }
}

export default BarComponent;

// Link to="/search-result" props
// this.state.operationType,
// this.state.propertyType,
// this.state.zoneId
