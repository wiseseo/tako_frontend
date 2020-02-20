import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';



export default function RegisterMenuDetailScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>RegisterMenuDetailScreen</Text>
      <Button
        title="메뉴등록완료"
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
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