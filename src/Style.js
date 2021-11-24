// @flow
import { Dimensions, Platform, StyleSheet } from 'react-native';
export const { width } = Dimensions.get('window');
export const DeviceHeight = Dimensions.get('window').height;
export const DeviceWidth = Dimensions.get('window').width;
export const Colors = {
  blue: '#6a5acd',
  blue1: '#663399',
  midnightblue: '#191970',
  green: '#6b8e23',
};

export const CommonStyle = StyleSheet.create({
  centeredPage: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  dropdownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  dropdownleftView: {
    width: '50%',
    justifyContent: 'center',
  },
  dropdownRightView: {
    width: '55%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerStyle1: { alignSelf: 'center', color: Colors.green, fontWeight: 'bold', fontSize: 24, },
  headerStyle2: { alignSelf: 'center', color: Colors.blue1, fontWeight: 'bold', borderBottomWidth: 4, borderBottomColor: Colors.green, fontSize: 24, },
  card: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.midnightblue,
    marginBottom: 5,
    marginLeft: 10,
  },
  textHeader1: {
    fontSize: 16,
    color: Colors.midnightblue,
    marginLeft: 10,
  },
  inputstyle: {
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
  },
  changeColor: {
    fontSize: 16,
    color: Colors.blue1,
    marginLeft: 10,
  },
  buttonColor: { backgroundColor: Colors.blue1, margin: 15, padding: 15, borderRadius: 10 },
  payText: { color: 'white', textAlign: 'center' }
});

