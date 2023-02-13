import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useEffect } from 'react';

const Map = () => {
    const origin = useSelector(selectOrigin);
    //const destination = useSelector(selectDestination);
    //const mapRef = useRef(null);
/*
    useEffectect(() => {
        if(!origin || !destination) return;
        //Zoom and fit to markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });  
    }, [origin, destination]);
*/
  return (
    <MapView
        //ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
            latitude: 40.53, 
            longitude: -7.85526, 
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    >
{/*
            <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />    
    */}

        <Marker
            coordinate={{
                latitude: 40.53, 
                longitude: -7.85526, 
            }}
            title="Origin"
            description={'description'/*origin.description*/}
            identifier="origin"
        />  


        <Marker
            coordinate={{
                latitude: 40.6575,
                longitude: -7.91428, 
            }}
            title="Destination"
            description={'description'/*destination.description*/}
            identifier="destination"
        />  

    </MapView>
  );
};


export default Map

const styles = StyleSheet.create({})