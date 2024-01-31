import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import Bg from '../assets/bg.png';
import Back from '../assets/back.png';

const Detail = ({ route }) => {
  const { title } = route.params;
  const navigation = useNavigation();
  const [fontLoader] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium
  })

  if (!fontLoader) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={Bg} style={styles.bg} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
        <Image source={Back} style={styles.icBack} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDesc}>
      IMT pada masa prakonsepsi sangat mempengaruhi pada kesuburan, kehamilan, persalinan, menyusui serta masa depan bayi yang dilahirkan. Banyak program hamil yang gagal karena masalah berat badan. Semakin besar berat badan seorang perempuan, peluang terjadinya kehamilan semakin kecil. IMT calon istri yang tidak ideal, akan mempengaruhi kehamilan. Beberapa studi menunjukkan bahwa hingga 30 % kehamilan dibawah usia 12 minggu terancam mengalami keguguran. 
      Pada trimester ke II dan ke III, IMT yang tidak ideal akan menimbulkan komplikasi kehamilan.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    height: 291, 
    width: '100%',
  },
  btnBack: {
    height: 40,
    width: 40, 
    position: 'absolute', 
    left: 20, 
    top: 50,
  },
  icBack: {
    height: 40, 
    width: 40,
  },
  txtTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 20,
    marginTop: 20,
  },
  txtDesc: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Poppins_500Medium',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    textAlign: 'justify',
  },
});

export default Detail;