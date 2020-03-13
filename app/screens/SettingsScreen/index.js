import React, {useState, useContext} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import Layout from '../../components/Layout';
import CustomDialog from '../../components/Dialog';
import {Fonts, Helpers, Colors} from '../../theme';

// Main Context
import {MainContext} from '../../store/Store';
// load action
import {updatePhoneNumbers} from '../../actions/updatePhoneNumbers';

const SettingsScreen = () => {
  const {state} = useContext(MainContext);
  const {dispatch} = useContext(MainContext);
  console.log(state);

  const [visible, setVisible] = useState(false);
  const [inputA, setinputA] = useState();
  const [inputB, setinputB] = useState();
  const [inputC, setinputC] = useState();
  const [inputD, setinputD] = useState();
  const [inputE, setinputE] = useState();

  // Dialog
  const _showDialog = () => setVisible(true);
  const _hideDialog = () => setVisible(false);

  // Update data
  const handlePress = () => {
    dispatch(updatePhoneNumbers([inputA, inputB, inputC, inputD, inputE]));
    _showDialog();
  };

  return (
    <Layout>
      <CustomDialog visible={visible} hide={_hideDialog} />
      <View style={Helpers.center}>
        <Text style={[Fonts.h3, Helpers.textCenter, styles.title]}>
          Değiştirmek istediğiniz numaraları aşağıdan değiştiriniz.
        </Text>
      </View>

      <View style={styles.inputsArea}>
        <View style={styles.inputArea}>
          <TextInput
            value={inputA}
            mode="outlined"
            label={'1.Kişi'}
            placeholder={state[0]}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={(formatted, extracted) => {
                  // formatted : +1 (123) 456-78-90
                  // extracted : 1234567890
                  setinputA(extracted);
                }}
                mask="[00] [000] [000] [0000]"
              />
            )}
            keyboardType={'numeric'}
            theme={{colors: {primary: Colors.primary}}}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            value={inputB}
            mode="outlined"
            label={'2.Kişi'}
            placeholder={state[1]}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={(formatted, extracted) => {
                  // formatted : +1 (123) 456-78-90
                  // extracted : 1234567890
                  setinputB(extracted);
                }}
                mask="[00] [000] [000] [0000]"
              />
            )}
            keyboardType={'numeric'}
            theme={{colors: {primary: Colors.primary}}}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            value={inputC}
            mode="outlined"
            label={'3.Kişi'}
            placeholder={state[2]}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={(formatted, extracted) => {
                  // formatted : +1 (123) 456-78-90
                  // extracted : 1234567890
                  setinputC(extracted);
                }}
                mask="[00] [000] [000] [0000]"
              />
            )}
            keyboardType={'numeric'}
            theme={{colors: {primary: Colors.primary}}}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            value={inputD}
            mode="outlined"
            label={'4.Kişi'}
            placeholder={state[3]}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={(formatted, extracted) => {
                  // formatted : +1 (123) 456-78-90
                  // extracted : 1234567890
                  setinputD(extracted);
                }}
                mask="[00] [000] [000] [0000]"
              />
            )}
            keyboardType={'numeric'}
            theme={{colors: {primary: Colors.primary}}}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            value={inputE}
            mode="outlined"
            label={'5.Kişi'}
            placeholder={state[4]}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={(formatted, extracted) => {
                  // formatted : +1 (123) 456-78-90
                  // extracted : 1234567890
                  setinputE(extracted);
                }}
                mask="[00] [000] [000] [0000]"
              />
            )}
            keyboardType={'numeric'}
            theme={{colors: {primary: Colors.primary}}}
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={Helpers.center}>
        <Button
          icon="pencil"
          mode="contained"
          compact={true}
          style={styles.button}
          uppercase={false}
          loading={false}
          color={Colors.primary}
          onPress={handlePress}>
          Güncelle
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    width: 300,
  },
  inputsArea: {
    marginVertical: 12,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginVertical: 6,
    backgroundColor: Colors.white,
  },
  button: {width: 150},
});

export default SettingsScreen;
