import * as React from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import Layout from '../../components/Layout';
import {Fonts, Colors, Images} from '../../theme';

const InfoScreen = () => {
  return (
    <Layout>
      <ScrollView>
        <View>
          <Text style={[Fonts.h1]}>Uygulama Nasıl Çalışıyor ?</Text>
          <Text style={styles.paragraph}>
            Güvendeyim uygulamasını kullanabilmek için ilk olarak uygulamayı
            açtığınızda sizden istenilen numara alanlarını doldurmalısınız. Eğer
            yanlış doldurduğunuz veya seçtiğiniz bir numara olduysa Ayarlar
            sekmesine giderek düzenleyebilirsiniz.
          </Text>
          <Text style={styles.paragraph}>
            Numara ekleme işleminden sonra ekranınızda bulunan
            <Text style={styles.nestedText}> GÜVENDEYİM </Text>
            butonuna basarak eklemiş olduğunuz numaralara o anda bulunduğunuz
            konum bilgileri ve güvende olduğunuza dair sms gönderilir.
          </Text>
          <Text style={styles.paragraph}>
            Herhangi bir internet bağlantısına ihtiyacınız yoktur. Yalnızca
            mesajınızın gidebilmesi için SMS hakkınız olmalıdır.
          </Text>
        </View>

        <View style={styles.seperator} />

        <View>
          <Text style={[Fonts.h1]}>Uygulama Hakkında</Text>
          <Text style={styles.paragraph}>
            Bu uygulama Genel Bilgi Teknolojileri Ltd. Şti. tarafından AKUT
            Arama Kurtarma Derneği ile birlikte geliştirilmiştir.
          </Text>
          <View style={styles.companyArea}>
            <View style={styles.area}>
              <Image source={Images.genelComp} resizeMode={'contain'} />
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Adres :</Text> Esentepe
                Büyükdere Cad. No:120 34394
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Telefon :</Text> +90 (212) 217
                04 10 ( Pbx )
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Web :</Text>
                https://www.akut.org.tr
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>E-Posta :</Text>
                info@akut.org.tr akut@akut.org.tr
              </Text>
            </View>
            <View style={styles.area}>
              <Image source={Images.akutComp} resizeMode={'contain'} />
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Adres :</Text> Esentepe
                Büyükdere Cad. No:120 34394
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Telefon :</Text> +90 (212) 217
                04 10 ( Pbx )
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Web :</Text>
                https://www.akut.org.tr
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.nestedText}>Web :</Text> info@akut.org.tr
                akut@akut.org.tr
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  seperator: {
    borderColor: Colors.secondary,
    borderWidth: 0.5,
    marginVertical: 18,
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8,
  },
  nestedText: {
    fontWeight: 'bold',
    color: Colors.primary,
  },

  companyArea: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  area: {
    width: 200,
  },
});

export default InfoScreen;
