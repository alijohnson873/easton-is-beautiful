import React, { Component } from 'react';
// import * as exifData from './data.json'
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker, MarkerWithLabel, InfoWindow } from "react-google-maps";

const exifData = [{
  "id": "1",
  "name": "IMG_0741.JPG",
  "latitude": 51.28808,
  "longitude": -2.342219
},
{
  "id": "2",
  "name": "IMG_0739.JPG",
  "latitude": 51.2876,
  "longitude": -2.343139
},
{"id": "3",
  "name": "IMG_0748.JPG",
  "latitude": 51.28478,
  "longitude": -2.334897
},
{"id": "4",
  "name": "IMG_0746.JPG",
  "latitude": 51.28504,
  "longitude": -2.34338
},
{"id": "5",
  "name": "IMG_0747.JPG",
  "latitude": 51.28475,
  "longitude": -2.34335
},
{"id": "6",
  "name": "IMG_0599.JPG",
  "latitude": 51.283815,
  "longitude": -2.325958
},
{"id": "8",
  "name": "IMG_0599.JPG",
  "latitude": 51.283815,
  "longitude": -2.325958
}]

function Map() {

  console.log(exifData)

  return (
    <GoogleMap 
    defaultZoom={14.5}
    defaultCenter={{lat: 51.469540, lng: -2.564120}}>
    <Circle
      defaultCenter={{lat: 51.469540,lng: -2.564120}}
      radius={1609}
      // radius={2000}
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

      {exifData.map((data) => (
        <Marker 
        key={data.id}
        position = {{lat: data.latitude, lng: data.longitude}}
        />
      ))}
    

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

