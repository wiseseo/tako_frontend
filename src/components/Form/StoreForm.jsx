import React, { useState, useContext }  from 'react';
import { Modal, FlatList, Alert } from 'react-native';
import { Content, Form ,Item, Input, Label, Thumbnail, Button, Text, Badge} from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import PickerItem from './PickerItem';
import { StoreContext } from '../../store/store';

import * as ImagePicker from 'expo-image-picker';

export default function StoreForm({screenName, isRegister, index}) {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(false);

    const { addStoreInList, modifyStore, typeList } = useContext(StoreContext);
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    let [selectedImage, setSelectedImage] = useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          Alert.alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        if (pickerResult.cancelled === true) {
          return;
        }
    
        setSelectedImage({ localUri: pickerResult.uri });
      };
 
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
                <Item>
                    <Modal         
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        }}
                        presentationStyle="formSheet">
                        <Content style={{marginTop : 22}}>
                            <FlatList
                            data={typeList}
                            keyExtractor={(item, index) => {
                                return String(index);
                            }}
                            renderItem={
                                ({item, index})=>
                                (  <PickerItem 
                                    label={item.label}
                                    value={item.value}
                                    selected={item.selected}
                                    index={index}
                                    />
                                )
                            }/>
                            <Button 
                                bordered 
                                full
                                onPress={()=>{
                                    setModalVisible(false);
                                    setSelectedMenu(true);
                                    console.log(typeList);
                                }}>
                                <Text>save</Text>
                            </Button>
                        </Content>
                    </Modal> 
                    <Button 
                        bordered 
                        rouneded 
                        onPress={() => {
                        setModalVisible(true);
                    }}>
                        <Text>메뉴 종류</Text>
                    </Button>
                    { selectedMenu && typeList.map((item)=>{
                        if(item.selected===true) return(<Badge primary><Text>{item.label}</Text></Badge>)
                    })}
                </Item>
                
                <BottomButton 
                    screenName={screenName} 
                    onPress={
                        isRegister ? () => {
                            addStoreInList({
                                title,
                                address,
                                time,
                                description,
                                thumbnail : selectedImage.localUri,
                                type: typeList.map((item)=>{
                                        if(item.selected===true) return(item.label);
                                        })
                            });
                            navigation.navigate('RegisterMenuScreen');
                        } : () => {
                            modifyStore({
                                title,
                                address,
                                time,
                                description,
                                thumbnail : selectedImage.localUri,
                                type: typeList.map((item)=>{
                                        if(item.selected===true) return(item.label);
                                        })
                            },index);
                            navigation.pop(1);
                        }
                    }
                />
            </Form>
    );
}
