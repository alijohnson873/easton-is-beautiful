import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker, MarkerWithLabel, InfoWindow } from "react-google-maps";


function Map() {

  return (
    <GoogleMap 
    defaultZoom={14.5}
    defaultCenter={{lat: 51.469540, lng: -2.564120}}>
    <Circle
      defaultCenter={{lat: 51.469540,lng: -2.564120}}
      radius={1609}
      options = {{
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity: 0,
      }}          
              />
    <Marker
      position = {{lat: 51.469540, lng: -2.564120}}
      onClick={() => {
        console.log('hello')
      }}
    />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
 
export default function MapContainer() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyArMRSq9rYUkcCnY2ZTlyPjf8zEPHmpP9Y`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

