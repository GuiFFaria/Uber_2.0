import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.page}>

            <View style={styles.container}>
                <Image 
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtn_tZxz2lValh94W-dhxSCuvsNy_u1Uy-lYc-jLuQ9hMVjYY&s',
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                />
                <GooglePlacesAutocomplete 
                    placeholder='Where from?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    debounce = {400}
                />

                <NavOptions/>
                <NavFavourites/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
    page:{
        backgroundColor: 'white',
        height: '100%',
    },
    container:{
        padding: 5,
    }
});
