import React from "react";
import {
  GoogleMap,
  GroundOverlay,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
const config = process.env.GOOGLE_MAP_API_KEY;

// const MAP_IMAGE = require("@/assets/imgs/blueprint.png");
const MAP_IMAGE = require("@/assets/imgs/3004_1F.PNG");

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 36.3798125202,
  lng: 127.367211561,
};

const optionsRoute = {
  strokeColor: "#00FF00",
  strokeOpacity: 0.7,
  strokeWeight: 6,
  fillColor: "#00FF00",
  fillOpacity: 0.5,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  // paths: pathPl,
  zIndex: 1,
};

const optionsTraj = {
  strokeColor: "#0000FF",
  strokeOpacity: 0.7,
  strokeWeight: 3,
  fillColor: "#0000FF",
  fillOpacity: 0.3,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 10000,
  // paths: pathPl,
  zIndex: 1,
};
function GoogleMapApi() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.GOOGLE_MAP_API_KEY}`,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    console.log(bounds);

    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <GroundOverlay
            url={MAP_IMAGE}
            bounds={{
              east: 127.368210944,
              north: 36.3803034266,
              south: 36.3798125202,
              west: 127.367211561,
            }}
          />
          <Polyline
            path={[
              { lat: 36.3800722718335, lng: 127.36793118691 },
              { lat: 36.3800725974993, lng: 127.367547509083 },
              { lat: 36.3800101107162, lng: 127.367547081407 },
              { lat: 36.3800101963372, lng: 127.367589699251 },
              { lat: 36.3799303871561, lng: 127.367589529849 },
            ]}
            options={optionsRoute}
          />
          <Polyline
            path={[
              { lat: 36.3800723718335, lng: 127.36792118691 },
              { lat: 36.3800724718335, lng: 127.36791118690999 },
              { lat: 36.3800725718335, lng: 127.36790118690999 },
              { lat: 36.3800726718335, lng: 127.36789118690999 },
              { lat: 36.380072771833504, lng: 127.36788118690998 },
              { lat: 36.380072871833505, lng: 127.36787118690998 },
              { lat: 36.380072971833506, lng: 127.36786118690998 },
              { lat: 36.38007307183351, lng: 127.36785118690997 },
              { lat: 36.38007317183351, lng: 127.36784118690997 },
              { lat: 36.38007327183351, lng: 127.36783118690997 },
              { lat: 36.38007337183351, lng: 127.36782118690996 },
              { lat: 36.38007347183351, lng: 127.36781118690996 },
              { lat: 36.38007357183351, lng: 127.36780118690996 },
              { lat: 36.380073671833514, lng: 127.36779118690995 },
              { lat: 36.380073771833516, lng: 127.36778118690995 },
              { lat: 36.38007387183352, lng: 127.36777118690995 },
              { lat: 36.38007397183352, lng: 127.36776118690995 },
              { lat: 36.38007407183352, lng: 127.36775118690994 },
              { lat: 36.38007417183352, lng: 127.36774118690994 },
              { lat: 36.38007427183352, lng: 127.36773118690994 },
              { lat: 36.38007437183352, lng: 127.36772118690993 },
              { lat: 36.380074471833524, lng: 127.36771118690993 },
              { lat: 36.380074571833525, lng: 127.36770118690993 },
              { lat: 36.380074671833526, lng: 127.36769118690992 },
              { lat: 36.38007477183353, lng: 127.36768118690992 },
              { lat: 36.38007487183353, lng: 127.36767118690992 },
              { lat: 36.38007497183353, lng: 127.36766118690991 },
              { lat: 36.38007507183353, lng: 127.36765118690991 },
              { lat: 36.38007517183353, lng: 127.3676411869099 },
              { lat: 36.38007527183353, lng: 127.3676311869099 },
              { lat: 36.380075371833534, lng: 127.3676211869099 },
              { lat: 36.380075471833536, lng: 127.3676111869099 },
              { lat: 36.38007557183354, lng: 127.3676011869099 },
              { lat: 36.38007567183354, lng: 127.36759118690989 },
              { lat: 36.38007577183354, lng: 127.36758118690989 },
              { lat: 36.38007587183354, lng: 127.36757118690988 },
              { lat: 36.38007597183354, lng: 127.36756118690988 },
              { lat: 36.38007607183354, lng: 127.36755118690988 },
              { lat: 36.380076171833544, lng: 127.36754118690988 },
              { lat: 36.380076271833545, lng: 127.36753118690987 },
            ]}
            options={optionsTraj}
          />
        </GoogleMap>
      )}
    </>
  );
}

export default React.memo(GoogleMapApi);
