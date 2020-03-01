import React  from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LikeButton from '../Common/LikeButton';
import MoveButton from '../Common/MoveButton';

export default function MapDetail() {
    const navigation = useNavigation();
    return (
        <View>
            <Text> 가게 </Text>
            <Text> 좋아요 </Text>
            <LikeButton onPress={()=>alert('좋아요!')}/>
            <MoveButton onPress={() => navigation.navigate('StoreInfoScreen')}/>
        </View>
    );
}