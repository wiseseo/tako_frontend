import React, { useState, useContext }  from 'react';
import { ListItem, Text, Radio, Right, Left } from 'native-base';
import { StoreContext } from '../../store/store';

export default function PickerItem({label, value, selected, index }) {
    
    const { typeList, selectedTypes } = useContext(StoreContext);
    const [ radioValue, setRadioValue ] = useState(selected);
    
    return (
       <ListItem 
            value={value}
            onPress={ ()=> {
                setRadioValue(prev => !prev);
                selectedTypes({
                    label,
                    value,
                    selected : !radioValue
                }, index);
                }
            }>
            <Left>
                <Text>{label}</Text>
            </Left>
            <Left>
                <Text>{selected}</Text>
            </Left>
            <Right>
                <Radio
                    selected={radioValue}
                />
            </Right>
        </ListItem>
    
    );
}

               