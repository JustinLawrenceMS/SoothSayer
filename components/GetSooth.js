import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, Vibration, View } from 'react-native';

export default function GetSooth() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSooth = async () => {
     try {
      const response = await fetch('https://gql.buttered.app/api/sooth/v1/fortune');
      const json = await response.json();
      setData(json);
	Vibration.vibrate();
	console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSooth();
  }, []);

  return(
	  <View style={{ flex: 1, backgroundColor: 'white' }}>
	      {isLoading ? <ActivityIndicator/> : (
		    <Text style={{ color: 'black', fontFamily: 'caramel', fontSize: 36 }}>{data}</Text>
		  )}
	    </View>

	);

};
