import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SettingScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <Button
        onPress={() => navigation.goBack()}
        title="<-"
      />
    ),
  });
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <Button
        title="내가 좋아하는 가게"
        onPress={() => navigation.navigate('MyFavoriteStoreScreen')}
      />
      <Button
        title="내 가게"
        onPress={() => navigation.navigate('MyStoreScreen')}
      />
      <Button
        title="내정보 수정"
        onPress={() => navigation.navigate('ModifySettingScreen')}
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