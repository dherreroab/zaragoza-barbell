import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
    height: "50vh",
    width: "40vh"
};

const defaultCenter = {
    lat: 41.645827, lng: -0.805660
}

export const LocationMap = (props => (
    <div className='map-section'>
        <LoadScript
            googleMapsApiKey='AIzaSyDXz7j3N_z6iIDwrdGXJPQo9cCisW2epsI'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
                streetView={true}
            >
                <Marker position={defaultCenter} clickable={true}
                />
            </GoogleMap>
        </LoadScript>
    </div>
));