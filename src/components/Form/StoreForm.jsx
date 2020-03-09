import React, { useState, useContext }  from 'react';
//import { Modal, Alert } from 'react-native';
import { Modal, TouchableHighlight,View, Alert } from 'react-native';
import { Form ,Item, Input, Label, Thumbnail, Button,  ListItem, Text, Radio, Right, Left, Picker } from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../store/store';
import * as ImagePicker from 'expo-image-picker';
//import MenuPicker from './MenuPicker';

export default function StoreForm({screenName, isRegister, index}) {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const { addStoreInList, modifyStore } = useContext(StoreContext);
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    let [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        if (pickerResult.cancelled === true) {
          return;
        }
    
        setSelectedImage({ localUri: pickerResult.uri });
      };
    /*
    if (selectedImage !== null) {
    return (
        <View style={styles.container}>
        <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
        />
        </View>
    );
    }
    */
    return (
            <Form>
                <Item floatingLabel>
                    <Label>이름</Label>
                    <Input 
                        value={title}
                        placeholder="가게이름"
                        autoFocus={false}
                        onChangeText={value => setTitle(value)}/>
                </Item>
                {/*<Item picker>
                    <Picker
                        mode="dropdown"
                        style={{ width: undefined }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                    >
                        <Picker.Item label="Wallet" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Debit Card" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                </Item>*/}
                <Item floatingLabel>
                    <Label>주소</Label>
                    <Input 
                        value={address}
                        placeholder="주소"
                        autoFocus={false}
                        onChangeText={value => setAddress(value)}/>
                </Item>
                <Item floatingLabel>
                    <Label>시간</Label>
                    <Input 
                        rowSpan={10} 
                        bordered 
                        placeholder="Textarea"
                        value={time}
                        placeholder="시간"
                        autoFocus={false}
                        onChangeText={value => setTime(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>설명</Label>
                    <Input
                        rowSpan={10} 
                        bordered 
                        placeholder="Textarea" 
                        value={description}
                        placeholder="설명"
                        autoFocus={false}
                        onChangeText={value => setDescription(value)}/>
                </Item>
                <Item>
                    <Button bordered rouneded onPress={openImagePickerAsync}>
                        <Text>썸네일 선택</Text>
                    </Button>
                </Item>
               { selectedImage !== null &&
                    <Thumbnail square source={{ uri: selectedImage.localUri }}/>
                }
                <Modal         
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
                <Button bordered rouneded onPress={() => {
                    setModalVisible(true);
                }}>
                    <Text>모달</Text>
                </Button>
                { /*modalVisible && <MenuPicker modalVisible={modalVisible}/>*/}
                <BottomButton 
                    screenName={screenName} 
                    onPress={
                        isRegister ? () => {
                            addStoreInList({
                                title,
                                address,
                                time,
                                description
                            });
                            navigation.navigate('RegisterMenuScreen');
                        } : () => {
                            modifyStore({
                                title,
                                address,
                                time,
                                description
                            },index);
                            navigation.pop(1);
                        }

                    }
                />
            </Form>
    );
}
