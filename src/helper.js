import React, { Component, useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Alert,
  Dimensions,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { CommonStyle } from './Style';
import Icon from 'react-native-vector-icons/AntDesign'

const DropdownIcon = () => {
  return (
    <Icon
      name={'caretdown'}
      color={Colors.blue}
      size={25}
    />

  );
};
export class InputTextHelper extends Component {
  render() {
    const { eachRow, state, updateState, edit = true } = this.props;
    return (
      <View
        style={CommonStyle.card}>
        <TextInput
          style={CommonStyle.inputstyle}
          placeholder={eachRow.placeholder}
          value={
            state[eachRow.stateName]
              ? state[eachRow.stateName] + ''
              : state[eachRow.stateName]
          }
          onChangeText={text => updateState({ [eachRow.stateName]: text })}
          editable={edit}
          multiline={true}
        />
      </View>
    );
  }
}

export class CustomDropDown1 extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      dropDowndata,
      label = '',
      mapKey = '',
    } = this.props;


    return (
      <View
        style={CommonStyle.card}>
        <Dropdown
          label={state[eachRow.stateName] ? '' : eachRow.stateName}
          containerStyle={{ width: '100%' }}
          data={dropDowndata}
          onChangeText={val => {
            updateState({ [eachRow.stateName]: val });
          }}
          value={state[eachRow.stateName]}
          labelExtractor={item => (label ? item[label] : item)}
          valueExtractor={item => (mapKey ? item[mapKey] : item)}
          renderAccessory={DropdownIcon}
          dropdownOffset={{ top: 5, left: 0 }}
        />
      </View>
    );
  }
}

export class CustomDropDown extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      dropDowndata,
      label = '',
      mapKey = '',
    } = this.props;


    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}>

        <Dropdown
          label={state[eachRow.stateName] ? '' : eachRow.placeholder}
          containerStyle={{ width: '100%' }}
          data={dropDowndata}
          onChangeText={val => {

            let list = dropDowndata.filter(each => {

              if (val === each.country) {
                return each;
              }
            });
            updateState({ ['states']: list[0].states });
            updateState({ [eachRow.stateName]: val });
          }}
          value={state[eachRow.stateName]}
          labelExtractor={item => (label ? item[label] : item)}
          valueExtractor={item => (mapKey ? item[mapKey] : item)}
          renderAccessory={DropdownIcon}
          dropdownOffset={{ top: 5, left: 0 }}
        />
      </View>
    );
  }
}
