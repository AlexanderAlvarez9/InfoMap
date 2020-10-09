import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import locations from '../../utils/locations.json';

const Maps = () => {
  const [selected, setSelected] = useState({});
  const APIkey = 'AIzaSyCxS2G6G-cvd8FwTQXGYyQ6i_4uGt8hZlo';
  const newData = [];
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 4.0,
    lng: -72.0,
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  const getData = async () => {
    const response = await fetch(
      'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'
    );
    const data = await response.json();

    data.map((datas) => {
      newData.push({
        CountryName: datas.countryregion,
        location: {
          lat: datas.location.lat,
          lng: datas.location.lng,
        },
      });
    });
    return data;
  };

  getData();

  return (
    <LoadScript googleMapsApiKey={APIkey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={4} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.CountryName}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <>
              <p>
                <b>{selected.CountryName}</b>
              </p>
              <p>Poblacion: {selected.population}</p>
              <p>Migrantes: {selected.migrants}</p>
              <p>Tasa de Fertilidad: {selected.fertRate}</p>
              <p>Edad Media: {selected.medAge}</p>
              <p>Poblacion Urbana: {selected.urbanPop}</p>
              <p>
                Coords: Lat: {selected.lat} - Lng: {selected.lat}
              </p>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
