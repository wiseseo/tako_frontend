import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import {Form} from 'native-base';
import MenuForm from '../components/MenuForm';


export default function RegisterMenuFormScreen({navigation}) {
  return (
    <View >
      <Text>RegisterMenuFormScreen</Text>
      <Form>
        <MenuForm/>
        <Button
          title="메뉴등록완료"
          onPress={() => navigation.dispatch(StackActions.pop(1))}
        />
      </Form>
    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/