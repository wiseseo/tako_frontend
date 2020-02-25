import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SignupScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button
        title="회원가입"
        onPress={() => navigation.goBack()}
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
