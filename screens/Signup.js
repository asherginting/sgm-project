import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LoveImg from '../assets/love.png';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');

  const [fontLoader] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!fontLoader) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.viewDaftar}>
            <Text style={styles.txtDaftar}>Daftar Akun</Text>
            <Image source={LoveImg} style={styles.imgLove} />
          </View>
          <TextInput
            style={styles.input}
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
          <View style={styles.viewPass}>
            <TextInput
              style={styles.inputPass}
              placeholder="Re Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              placeholderTextColor="#656565"
            />
            <TouchableOpacity onPress={handleToggleConfirmPassword} style={styles.btnEye}>
              <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="#2E3A59" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#656565"
          />
          <TextInput
            style={styles.input}
            placeholder="Tanggal Lahir"
            value={birthday}
            onChangeText={setBirthday}
            placeholderTextColor="#656565"
          />
          <TextInput
            style={styles.inputAdd}
            placeholder="Alamat"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="#656565"
            multiline={true}
          />
          <TouchableOpacity style={styles.btnDaftar} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.txtDaftar}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('5%'),
  },
  viewDaftar: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
    marginTop: hp('5%'),
    justifyContent: 'center',
  },
  txtDaftar: {
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
    fontFamily: 'Poppins_600SemiBold',
  },
  imgLove: {
    width: wp('5%'),
    height: hp('2.5%'),
    marginLeft: hp('0.8%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: hp('4%'),
    height: hp('7%'),
    paddingHorizontal: wp('5%'),
    marginBottom: hp('0.8%'),
    marginTop: hp('0.8%'),
    width: wp('90%'),
  },
  inputAdd: {
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: hp('4%'),
    height: hp('20%'),
    paddingTop: 20,
    textAlignVertical: 'top',
    paddingHorizontal: wp('5%'),
    marginBottom: hp('0.8%'),
    marginTop: hp('0.8%'),
    width: wp('90%'),
  },
  viewPass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  inputPass: {
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: hp('4%'),
    height: hp('7%'),
    paddingHorizontal: wp('5%'),
    width: wp('90%'),
    marginTop: hp('1%'),
  },
  btnEye: {
    position: 'absolute',
    right: wp('5%'),
    top: wp('7%'),
  },
  btnDaftar: {
    backgroundColor: '#00CA9D',
    borderRadius: hp('4%'),
    height: hp('7%'),
    width: wp('90%'),
    justifyContent: 'center',
    top: wp('4%'),
  },
  txtDaftar: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    fontSize: hp('2%'),
  },
});

export default Signup;
