import React from 'react';
import BackButton from '../components/Common/BackButton';
import { StyleSheet, Text, View} from 'react-native';


export default function StoreInfoScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  return (
    <View style={styles.container}>
      <Text>StoreInfoScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
