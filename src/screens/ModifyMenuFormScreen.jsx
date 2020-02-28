import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuForm from '../components/MenuForm';
import MenuFormButton from '../components/Button/BottomButton/MenuFormButton';
import { Form } from 'native-base';

export default function ModifyMenuFormScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ModifyMenuFormScreen</Text>
      <Form>
        <MenuForm/>
        <MenuFormButton navigation={navigation}/>
      </Form>
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