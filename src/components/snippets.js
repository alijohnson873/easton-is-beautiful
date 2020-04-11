//         <Map 
        
//           google={this.props.google} 
//           zoom={16}
//           initialCenter={{
//             lat: 51.469540,
//             lng: -2.564120
//           }}
//           onClick={this.onMapClicked}
//         >
   
//         <Marker
//           title={'The marker`s title will appear as a tooltip.'}
//           name={'SOMA'}
//           position={{lat: 51.469540, lng: -2.564120}} />
   
      

// <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 <h1>Hello</h1>
//               </div>
//           </InfoWindow>
//           {/* <Circle
//         radius={1200}
//         center={{lat: 51.469540, lng: -2.564120}}
      
//         strokeColor='transparent'
//         strokeOpacity={0}
//         strokeWeight={5}
//         fillColor='#FF0000'
//         fillOpacity={0.2}
//          /> */}
       
//         </Map>

import React, { Component } from 'react';
import {Map, Circle, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
    
      return (
        <Map 
        
          google={this.props.google} 
          zoom={16}
          initialCenter={{
            lat: 51.469540,
            lng: -2.564120
          }}
          onClick={this.onMapClicked}
        >
   
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 51.469540, lng: -2.564120}} />
   
      

<InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Hello</h1>
              </div>
          </InfoWindow>
      
       
        </Map>
        
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyArMRSq9rYUkcCnY2ZTlyPjf8zEPHmpP9Y')
  })(MapContainer)
