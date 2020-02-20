import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ModifySettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ModifySettingScreen</Text>
      <Button
        title="내정보 수정완료"
        onPress={() => navigation.pop(1)}
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