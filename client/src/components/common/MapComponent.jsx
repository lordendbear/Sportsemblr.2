import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.markerPosition}>
        {
            props.isMarkerShown &&
                <Marker position={props.markerPosition}
                    onDragEnd={(data) => props.onMarkerDragEnd(data, 'location')}
                    defaultClickable={props.markerClickable}
                    defaultDraggable={props.markerDraggable}
                />
        }
  </GoogleMap>
));

export default MapComponent;
