import { useCallback, useRef, memo } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const API_KEY=process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const defaultOptions={
  panControl:true,
  zoomControl:true,
  mapTypeControl:false,
  scaleControl:false,
  streetViewControl:false,
  rotateControl:false,
  clickableIcons:false,
  keyboardShortcuts:false,
  scrollwheel:false,
  disableDoubleClickZoom:false,
  fullscreenControl: false,
}

function Map() {
  const mapRef = useRef(undefined)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  // const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map)

    mapRef.current = map;
  }, [])

  const onUnmount = useCallback(function callback(map) {
    // setMap(null)

    mapRef.current = undefined;
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
      <Marker position={center}/>
      </GoogleMap>
  ) : <></>
}

export default memo(Map)