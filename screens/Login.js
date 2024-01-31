import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LoveImg from '../assets/love.png';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [fontLoader] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  if (!fontLoader) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewSelamat}>
        <Text style={styles.txtSelamat}>Selamat Datang</Text>
        <Image source={LoveImg} style={styles.imgLove} />
      </View>
      <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#656565"
      />
      <View style={styles.viewPass}>
        <TextInput
          style={styles.inputPass}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor="#656565"
        />
        <TouchableOpacity onPress={handleTogglePassword} style={styles.btnEye}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#2E3A59" />
        </TouchableOpacity>
      </View>
      <View style={styles.viewForgot}>
        <Text style={styles.txtLupa}>Lupa password ?</Text>
        <TouchableOpacity>
          <Text style={styles.txtReset}>Reset</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnMasuk}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.txtMasuk}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDaftar}
        onPress={() => {
          navigation.navigate('Signup');
         }}>
        <Text style={styles.txtDaftar}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  viewSelamat: {
    flexDirection: 'row', 
    marginBottom: hp('2%'),
  },
  txtSelamat: {
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
    fontFamily: 'Poppins_600SemiBold',
  },
  imgLove: {
    width: wp('5%'),
    height: hp('2.5%'),
    marginLeft: hp('0.8%'),
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: hp('4%'),
    height: hp('7%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('0.8%'),
    width: wp('90%'),
  },
  viewPass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  inputPass: {
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: hp('4%'),
    height: hp('7%'),
    paddingHorizontal: wp('5%'),
    width: wp('90%'),
    marginTop: hp('2%'),
  },
  btnEye: {
    position: 'absolute',
    right: wp('5%'),
    top: wp('9%'),
  },
  viewForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('4%'),
    width: wp('90%'),
  },
  txtLupa: {
    color: '#000',
  },
  txtReset: {
    color: '#FE3470',
    fontWeight: 'bold',
  },
  btnMasuk: {
    backgroundColor: '#F6B9B3',
    borderRadius: hp('4%'),
    height: hp('7%'),
    width: wp('90%'),
    justifyContent: 'center',
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
  },
  txtMasuk: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    fontSize: hp('2%'),
  },
  btnDaftar: {
    backgroundColor: '#00CA9D',
    borderRadius: hp('4%'),
    height: hp('7%'),
    width: wp('90%'),
    justifyContent: 'center',
  },
  txtDaftar: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    fontSize: hp('2%'),
  },
});

export default Login;
