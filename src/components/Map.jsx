import { useCallback, useRef, memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { options } from "../settings/map/googleMapOptions";
import { center, production, petrivsky } from "../settings/map/coordinates";

const API_KEY = process.env.REACT_APP_API_KEY;

const mapSize = {
  width: "100%",
  height: "100%",
};

function Map() {
  const mapRef = useRef(undefined);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapSize}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <Marker position={production} />
        <Marker position={petrivsky} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default memo(Map);
