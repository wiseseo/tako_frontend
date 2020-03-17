import React, { useState, useContext, useEffect }  from 'react';
import { StyleSheet, Modal, FlatList, Alert, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
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
    const [showMap, setShowMap] = useState(false);
    const [pickedMap, setPickedMap] = useState({});
    
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
    
    useEffect(()=>{
        console.log(typeList);
        //console.log(pickedMap);
    },[typeList]);

    useEffect(()=>{
        console.log(pickedMap);
    },[pickedMap]);

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
                <Item style={styles.rowContainer}>
                    <Label floatingLabel>주소</Label>
                    <Input 
                        value={address}
                        placeholder="주소"
                        autoFocus={false}
                        onChangeText={value => setAddress(value)}/>
                    <Modal         
                        animationType="slide"
                        transparent={false}
                        visible={showMap}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setShowMap(false);
                            //console.log(typeList);
                        }}
                        presentationStyle="formSheet">
                        <Content style={{marginTop : 22}}>
                            <View>
                                <MapView 
                                    style={styles.mapStyle}
                                    provider="google"
                                    initialRegion = {{
                                    longitude: 126.95330254733562,
                                    latitude: 37.51056599885274,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                    }}
                                    showsUserLocation={true}
                                    followsUserLocation={true}
                                    onPress={(e)=>{
                                    console.log(e.nativeEvent.coordinate);
                                    setPickedMap({latitude : e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude});
                                    }}/>
                            </View>
                            <Button 
                                bordered 
                                full
                                onPress={()=>{
                                    setShowMap(false);
                                }}>
                                <Text>save</Text>
                            </Button>
                        </Content>
                    </Modal>
                    <Button
                        bordered 
                        rounded 
                        onPress={() => {
                        setShowMap(true)}}>
                        <Text>지도에서 찾기</Text>
                    </Button>        
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
                    <Label>가게 사진 선택</Label>
                    <Button bordered rounded onPress={openImagePickerAsync}>
                        <Text>썸네일 선택</Text>
                    </Button>
                </Item>
               { selectedImage !== null &&
                    <Thumbnail square source={{ uri: selectedImage.localUri }}/>
                }
                <Item>
                    <Label>메뉴 타입</Label>
                    <Modal         
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(false);
                            //console.log(typeList);
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
                                    key={index}
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
                        rounded 
                        onPress={() => {
                        setModalVisible(true);
                    }}>
                        <Text>메뉴 종류</Text>
                    </Button>
                    { selectedMenu && typeList.filter((item)=>{
                        return item.selected===true
                    }).map((item)=> <Badge primary><Text>{item.label}</Text></Badge>)}
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
                                type: typeList.filter((item)=> item.selected === true).map(item=>item.label)
                            });
                            navigation.navigate('RegisterMenuScreen');
                        } : () => {
                            modifyStore({
                                title,
                                address,
                                time,
                                description,
                                thumbnail : selectedImage.localUri,
                                type: typeList.filter((item)=> item.selected === true).map(item=>item.label)
                            },index);
                            navigation.pop(1);
                        }
                    }
                />
            </Form>
    );
}

const styles = StyleSheet.create({
    rowContainer : {
        flex: 1,
        flexDirection: 'column', // 혹은 'column'
        alignItems:'flex-start'
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2,
    },
  });
