import React , {useState, useContext} from 'react';
import { Alert } from 'react-native';
import {Form, Item, Input, Label, Thumbnail, Button, Text } from 'native-base';
import BottomButton from '../Button/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../store/store';
import * as ImagePicker from 'expo-image-picker';

export default function MenuForm({screenName, isRegister, index}) {
    const navigation = useNavigation();
    const {modifyMenu, addMenuInList} = useContext(StoreContext);

    const [menu, setMenu] = useState("");
    const [price, setPrice] = useState("");

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
                    <Label>menu</Label>
                    <Input 
                    value={menu}
                    placeholder="메뉴이름"
                    autoFocus={false}
                    onChangeText={value => setMenu(value)}/>
                </Item>
                <Item floatingLabel>
                    <Label>price</Label>
                    <Input 
                    value={price}
                    placeholder="가격"
                    autoFocus={false}
                    onChangeText={value => setPrice(value)}/>
                </Item>
                <Item>
                    <Button bordered rouneded onPress={openImagePickerAsync}>
                        <Text>썸네일 선택</Text>
                    </Button>
                </Item>
               { selectedImage !== null &&
                    <Thumbnail square source={{ uri: selectedImage.localUri }}/>
                }
                <BottomButton 
                screenName={screenName}
                onPress={
                    isRegister ? () => {
                        addMenuInList({
                            menu,
                            price,
                            photo : selectedImage.localUri
                        });
                        navigation.pop(1);
                    } : ()=>{
                        modifyMenu({
                            menu,
                            price,
                            photo : selectedImage.localUri
                        }, index);
                        navigation.pop(1);
                    }
                }
                />
        </Form>
    );
}
