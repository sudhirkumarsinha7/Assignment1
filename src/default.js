import { Keyboard } from "react-native";

export const BillingAddress = {
  firstline: {
    displayName: 'First Line',
    stateName: 'firstline',
    placeholder: 'First Line',
  },
  secondline: {
    displayName: 'Second Line',
    stateName: 'secondline',
    placeholder: 'Second Line',
  },
  pin: {
    displayName: 'Pin',
    stateName: 'pin',
    placeholder: 'Pin Code',
  },
  state: {
    displayName: 'State',
    stateName: 'state',
    placeholder: 'State',
  },
  country: {
    displayName: 'Country',
    stateName: 'country',
    placeholder: 'Country',
  },
};

export const CardDetails = {
  name: {
    displayName: 'Card Name',
    stateName: 'name',
    placeholder: 'Name on your card'
  },
  cardNo: {
    displayName: 'CardNo',
    stateName: 'cardNo',
    placeholder: '16 digit Card Number',
    KeyboardType: 'numeric'
  },
  exp: {
    displayName: 'Exp',
    stateName: 'exp',
    placeholder: 'Expiration Date'
  },
  cvv: {
    displayName: 'CVV',
    stateName: 'cvv',
    placeholder: 'CVV',
    KeyboardType: 'numeric'
  },
};

export const ShippingAddress = {
  firstline: '123 Pacific BLVD',
  secondline: 'San Diego',
  pin: '90372',
  state: 'California',
  country: 'United States of America'
}