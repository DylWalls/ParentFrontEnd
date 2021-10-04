import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import React from 'react';


function Map(){
  return <GoogleMap defaultZoom={10} 
  defaultCenter={{lat: 47.50440074413531, lng: -111.30975214224557}}
  />
}
const WrappedMap = withScriptjs(withGoogleMap(Map))

const Map = ()=>{
  return (
    <div style={{width: '50vw', height: '50vh'}}>
      <WrappedMap 
      googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{height: '100%vh'}}/>}
      containerElement={<div style={{height: '100%vh'}}/>}
      mapElement={<div style={{height: '100%vh'}}/>}
      />
    </div>
  );
}

export default Map
