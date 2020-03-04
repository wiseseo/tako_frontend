import React  from 'react';
import SettingForm from './SettingForm';
import List from './List';

export default function UserInfo({newSetting}) {
    return newSetting ? <SettingForm/> : <List/>
    
}