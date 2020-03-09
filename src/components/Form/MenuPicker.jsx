import React, { useState, useContext }  from 'react';
import { Content, ListItem, Text, Radio, Right, Left , Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function MenuPicker({modalVisible}) {
    const navigation = useNavigation();
    const [tako, setTako] = useState(false);
    const [ho, setHo] = useState(false);
    const [chi, setChi] = useState(false);
    return (
        <Content>
            <ListItem>
                <Left>
                <Text>타코야끼</Text>
                </Left>
                <Right>
                <Radio 
                    selected={tako} 
                    onPress={
                    ()=>{
                        setTako(prev=>!prev)
                    }
                    }
                />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                <Text>호떡</Text>
                </Left>
                <Right>
                <Radio 
                    selected={ho}
                    onPress={
                        ()=>{
                            setHo(prev=>!prev)
                        }
                    } 
                />
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                <Text>닭꼬치</Text>
                </Left>
                <Right>
                <Radio 
                    selected={chi} 
                    onPress={
                        ()=>{
                            setChi(prev=>!prev)
                        }
                    }
                />
                </Right>
            </ListItem>

            <Button bordered full onPress={()=>{
                navigation.goBack();
            }}>
                <Text>save</Text>
            </Button>
        </Content>
    );
}
