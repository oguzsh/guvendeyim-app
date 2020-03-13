import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// Colors
import {Colors, Fonts, Helpers} from '../../theme';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SendSMS from 'react-native-sms';

const _sendSMS = (phoneNumbersArray, messageText) => {
  SendSMS.send({
    body: messageText.toString(),
    recipients: phoneNumbersArray,
    successTypes: ['sent', 'queued'],
    allowAndroidSendWithoutReadPermission: true,
  });
};

const MessageButton = props => {
  const phoneNumbers = props.phoneNumbers;
  const message = props.message;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, Helpers.center]}
      onPress={() => _sendSMS(phoneNumbers, message)}>
      <View style={[styles.button, Helpers.center]}>
        <Icon name="check-circle" style={styles.buttonIcon} />
        <Text style={[styles.buttonText, Fonts.h1]}>GÜVENDEYİM</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  buttonContainer: {
    width: 300,
    height: 300,
    borderColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 300 / 2,
  },
  buttonText: {
    color: Colors.white,
    letterSpacing: 0.5,
    marginTop: 14,
  },
  buttonIcon: {
    color: Colors.white,
    fontSize: 72,
  },
});

export default MessageButton;
