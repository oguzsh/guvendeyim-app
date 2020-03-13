import React, {useContext} from 'react';
import {Text, View} from 'react-native';

// Main Context
import {MainContext} from '../../store/Store';

// Utilities
import {Fonts, Helpers} from '../../theme';

// Components
import MessageButton from '../../components/MessageButton';
import Layout from '../../components/Layout';

const MainScreen = () => {
  const {state} = useContext(MainContext);
  return (
    <Layout>
      <View style={[Helpers.spaceEvenlyCenter, Helpers.fill]}>
        <Text style={[Helpers.textCenter, Fonts.h2]}>
          Güvende olduğunuz bilgisini göndermek için aşağıdaki butona basınız.
        </Text>
        <MessageButton phoneNumbers={state} message="hello" />
      </View>
    </Layout>
  );
};

export default MainScreen;
