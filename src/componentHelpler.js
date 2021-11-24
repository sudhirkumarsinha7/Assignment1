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
import { BillingAddress, ShippingAddress, CardDetails } from './default'
import { InputTextHelper, CustomDropDown, CustomDropDown1 } from './helper'
import { CommonStyle, Colors } from './Style';
import { countries } from './contries'
import Icon from 'react-native-vector-icons/AntDesign'
export class Header extends Component {
    render() {

        return (
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={{ marginLeft: 15, flex: 0.2 }}>
                    <Icon
                        name={'leftcircle'}
                        color={Colors.blue}
                        size={25}
                    />
                </TouchableOpacity>
                <View style={{ ...CommonStyle.centeredPage, flex: 0.6 }}>
                    <Text style={CommonStyle.headerStyle1}>COVI </Text>
                    <Text style={CommonStyle.headerStyle2}>STIX </Text>
                </View>

            </View>
        );
    }
}
export class ShippingAddressComponet extends Component {
    render() {
        const { ShippingAddressDetails } = this.props;
        const { firstline, secondline, state, pin } = ShippingAddressDetails;
        return (
            <View
                style={CommonStyle.card}>
                <Text
                    style={CommonStyle.textHeader}>
                    Confirm Shipping address
                </Text>
                <Text style={CommonStyle.textHeader1}>
                    {firstline + ', ' + secondline + ', '}
                </Text>
                <Text style={CommonStyle.textHeader1}>
                    {state + ' ' + pin}
                </Text>
                <TouchableOpacity>
                    <Text style={CommonStyle.changeColor}>Change</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export class PaymentComponent extends Component {
    render() {
        const { state, updateState } = this.props;
        return (
            <View
                style={CommonStyle.card}>
                <Text
                    style={CommonStyle.textHeader}>
                    Add Payment Details
                </Text>
                <InputTextHelper
                    eachRow={CardDetails.name}
                    state={state}
                    updateState={updateState}
                />
                <InputTextHelper
                    eachRow={CardDetails.cardNo}
                    state={state}
                    updateState={updateState}
                />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 0.5 }}>
                        <InputTextHelper
                            eachRow={CardDetails.exp}
                            state={state}
                            updateState={updateState}
                        />
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <InputTextHelper
                            eachRow={CardDetails.cvv}
                            state={state}
                            updateState={updateState}
                        />
                    </View>
                </View>


            </View>
        );
    }
}

export class BillingCompoment extends Component {
    render() {
        const { state, updateState } = this.props;
        return (
            <View
                style={CommonStyle.card}>
                <Text
                    style={CommonStyle.textHeader}>
                    Billing Address
                </Text>
                <InputTextHelper
                    eachRow={BillingAddress.firstline}
                    state={state}
                    updateState={updateState}
                />
                <InputTextHelper
                    eachRow={BillingAddress.secondline}
                    state={state}
                    updateState={updateState}
                />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 0.5 }}>
                        <CustomDropDown1
                            eachRow={BillingAddress.state}
                            state={state}
                            updateState={updateState}
                            dropDowndata={state.states}

                        />
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <InputTextHelper
                            eachRow={BillingAddress.pin}
                            state={state}
                            updateState={updateState}
                        />
                    </View>
                </View>
                <CustomDropDown
                    eachRow={BillingAddress.country}
                    state={state}
                    updateState={updateState}
                    dropDowndata={countries}
                    label={'country'}
                    mapKey="country"
                />

            </View>
        );
    }
}
