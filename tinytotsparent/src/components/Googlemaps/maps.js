import React, { 
  useCallback,
  useRef,
} from 'react';

import {
  GoogleMap,
 } from "@react-google-maps/api";

import mapStyles from "./mapStyles"
import "../Googlemaps/maps.css"

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const mapContainerStyle = {
  width:"65vw",
  height:"75vh",
  left: "6.92in",
  bottom: "1in"
}
const center = {
  lat: 47.5053,
  lng: -111.3008,
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}

const Maps = () => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map)=> {
    mapRef.current = map;
  }, [])

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  return (
  <div>
   <Search panTo={panTo} />

     <GoogleMap 
        id="map"
        mapContainerStyle={mapContainerStyle} 
        zoom={12} 
        center={center}
        options={options}
        onLoad={onMapLoad}
     >
     </GoogleMap>
   </div>
  )
}


function Search({panTo}) {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutoComplete({
    requestOptions: {
      location: {
        lat: () => 47.5053,
        lng: () => -111.3008 },
        radius: 200 * 1000,
    }
  })

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
     <div className="search">
     
     <Combobox onSelect={handleSelect}>
     <ComboboxInput 
        value={value} 
        onChange={handleInput}
        disabled={!ready}
        placeholder= "Enter the Activity Name"
     />
     <ComboboxPopover>
       <ComboboxList>
       {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
       </ComboboxList>
     </ComboboxPopover>
    </Combobox>
  </div>
  )


}

export default Maps