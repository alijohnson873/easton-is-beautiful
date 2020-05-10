import React, { Component, useState } from 'react'; 
import * as exifData from '../images/image-exif-data.json' 
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker, MarkerWithLabel, InfoWindow, MarkerClusterer  } from "react-google-maps";
import './MapContainer.css'

function Map() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <GoogleMap 
    defaultZoom={14.9}
    defaultCenter={{lat: 51.469540, lng: -2.564120}}>
     
       <Circle
      defaultCenter={{lat: 51.469540,lng: -2.564120}}
      radius={1609}
      options = {{
        strokeColor: 'green',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillOpacity: 0,
      }}          
     />
      {exifData.data.map((photo) => (
        <Marker 
        position = {{lat: Number(photo.latitude), lng: Number(photo.longitude)}}
        onClick = {() => {
          setSelectedPhoto(photo)
        }}
        // icon = {{
        //   url: '/location-pin-camera--512.png',
        //   scaledSize: new window.google.maps.Size(25,25)
        // }}
        />
      ))}
       {selectedPhoto && (
           <InfoWindow 
           position = {{lat: Number(selectedPhoto.latitude), lng: Number(selectedPhoto.longitude)}}
           onCloseClick = {() => {
            setSelectedPhoto(null)
          }}

          // content = '<img src="../images/IMG_0739.JPG"></img>'
           > 

           <div id="image-container">
           <img src={require(`../images/${selectedPhoto.name}`)} />
           </div>
           </InfoWindow>
       )}

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

