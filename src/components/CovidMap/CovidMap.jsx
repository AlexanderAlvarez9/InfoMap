import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import locations from '../../utils/locations.json';

const CovidMap = () => {
  const [selected, setSelected] = useState({});
  const [dataMap, setDataMap] = useState(locations);
  const APIkey = 'AIzaSyCxS2G6G-cvd8FwTQXGYyQ6i_4uGt8hZlo';
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
    setDataMap([data]);
    console.log('nuevaData');
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  // console.error(locations);
  console.log(dataMap[0]);

  return (
    <LoadScript googleMapsApiKey={APIkey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={3} center={defaultCenter}>
        {dataMap !== undefined
          ? dataMap.map((item) => {
              <Marker
                key={item.id}
                position={item.location}
                onClick={() => onSelect(item)}
              />;
            })
          : console.log('chao')}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <>
              <p>
                <h3>{selected.CountryName}</h3>
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

export default CovidMap;
