import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function GetSooth() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSooth = async () => {
     try {
      const response = await fetch('https://gql.buttered.app/api/sooth/v1/fortune');
      const json = await response.json();
      setData(json);
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
	  <View style={{ flex: 1, padding: 24 }}>
	      {isLoading ? <ActivityIndicator/> : (
		    <Text>{data}</Text>
		  )}
	    </View>

	);

};
