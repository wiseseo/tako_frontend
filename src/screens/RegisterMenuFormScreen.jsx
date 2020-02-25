import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';



export default function RegisterMenuFormScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>RegisterMenuFormScreen</Text>
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