import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import { BillingAddress, ShippingAddress, CardDetails } from './default'
import { InputTextHelper, CustomDropDown, CustomDropDown1 } from './helper'
import { CommonStyle, Colors } from './Style';
import { countries } from './contries'
import { Header, PaymentComponent, BillingCompoment, ShippingAddressComponet } from './componentHelpler'
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      states: [],
      isSameAddress: false,
      saveLater: false
    };
  }
  updateState(element) {
    this.setState(element);
  }
  _sameAddress() {
    const { isSameAddress } = this.state
    this.setState({ isSameAddress: !isSameAddress })
    if (!isSameAddress) {
      this.setState({
        firstline: ShippingAddress.firstline, secondline: ShippingAddress.secondline,
        pin: ShippingAddress.pin,
        state: ShippingAddress.state,
        country: ShippingAddress.country
      })
    } else {
      this.setState({
        firstline: '', secondline: '',
        pin: '',
        state: '',
        country: ''
      })
    }
  }
  render() {
    const { isSameAddress, saveLater } = this.state
    return (
      <ScrollView style={styles.container1}>
        <View style={styles.container}>
          <Header />
          <ShippingAddressComponet
            ShippingAddressDetails={ShippingAddress} />
          <PaymentComponent
            state={this.state}
            updateState={this.updateState} />
          <BillingCompoment
            state={this.state}
            updateState={this.updateState} />
          <View style={CommonStyle.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <Checkbox.Android
                status={isSameAddress ? 'checked' : 'unchecked'}
                onPress={() => {
                  this._sameAddress()
                }}
              />
              <Text>Billing Address is same As Shipping Address</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox.Android
                status={saveLater ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ saveLater: !saveLater })
                }}
              />
              <Text>Save Payment Details for later</Text>
            </View>
          </View>
          <TouchableOpacity style={CommonStyle.buttonColor}>
            <Text style={CommonStyle.payText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#c0c0c0',
    marginTop: Platform.OS === 'ios' ? 30 : 0
  },
  container: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
    marginRight: 15,
    marginTop: Platform.OS === 'ios' ? 30 : 0
  },
});