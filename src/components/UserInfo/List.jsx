import React , {useContext} from 'react';
import { ListItem, Text, Left, Right} from 'native-base';
import { UserContext } from '../../store/user';

export default function List() {
  const {name} = useContext(UserContext);
    return (
        <>
            <ListItem>
              <Left>
                <Text>name</Text>
              </Left>
              <Right>
                <Text>{name}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>id</Text>
              </Left>
              <Right>
                <Text>ggg</Text>
              </Right>
            </ListItem>
         </>
    );
}