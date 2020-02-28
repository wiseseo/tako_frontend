import React  from 'react';
import { View, Text, Button } from 'react-native';

export default function MapDetail({ navigation }) {
    return (
        <View>
            <Text> 가게 </Text>
            <Text> 좋아요 </Text>
            <Button
                title="자세히 보기"
                onPress={() => navigation.navigate('StoreInfoScreen')}
            />
        </View>
    );
}