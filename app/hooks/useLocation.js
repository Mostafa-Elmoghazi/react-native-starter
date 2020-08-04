import { useState, useEffect } from 'react';
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        const { granted } = await Location.requestPermissionsAsync();
        if (!granted) return;
        const result = await Location.getLastKnownPositionAsync();
        const { latitude, longitude } = result.coords;
        setLocation({ latitude, longitude });
    };

    useEffect(() => {
        getLocation();
    }, []);
    return location;
};