import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render () {
  return(
        <Map
        google={this.props.google}
        style={{width:"100%", height:"100%"}}
        zoom={15}
        initialCenter ={
          {
            lat:13.3410,
            lng:74.7421,
          }
        }
        />
  );
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCgct0MqU-1kR2Pt4kIsaLcNuqC2iLzcdw")
})(MapContainer)
