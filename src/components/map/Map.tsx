import React from "react";
import GoogleMapReact from "google-map-react";

const googleMapsAPIKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


const PropertyMap = (data: any) => {
    console.log(data?.data.data)
  const defaultProps = {
    center: {
      lat: data?.data.lat,
      lng: data?.data.lon,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
};

export default PropertyMap;
