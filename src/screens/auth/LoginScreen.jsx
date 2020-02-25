import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('SignupScreen')}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('SignupScreen')}
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
