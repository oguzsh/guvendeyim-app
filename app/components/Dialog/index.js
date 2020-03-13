import React from 'react';
import {View} from 'react-native';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';

const CustomDialog = props => {
  const hideDialog = () => {
    props.hide();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={props.visible} onDismiss={hideDialog}>
          <Dialog.Title>Bilgilendirme</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Numaralar başarıyla güncellendi.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>TAMAM</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CustomDialog;
