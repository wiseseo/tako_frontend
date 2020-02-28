import React  from 'react';
import { ListItem, Text, Left, Right} from 'native-base';


export default function List() {
    return (
        <>
            <ListItem>
              <Left>
                <Text>name</Text>
              </Left>
              <Right>
                <Text>서지혜</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>id</Text>
              </Left>
              <Right>
                <Text>mansesjh22</Text>
              </Right>
            </ListItem>
         </>
    );
}