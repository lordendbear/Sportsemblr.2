import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {
            props.isMarkerShown &&
                <Marker position={props.markerPosition}
                    onDragEnd={(data) => props.onMarkerDragEnd(data, 'location')}
                    defaultClickable
                    defaultDraggable />
        }
  </GoogleMap>
));

export default MapComponent;
