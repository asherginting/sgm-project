import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [fontLoader] = useFonts({
    Poppins_500Medium,
  });

  const data = [
    { id: '1', name: 'Satu satu', title: 'Legalitas dan Struktur', image: require('../assets/legalitas.png') },
    { id: '2', name: 'Dua dua', title: 'Ketahanan Fisik', image: require('../assets/fisik.png') },
    { id: '3', name: 'Tiga tiga', title: 'Ketahanan Ekonomi', image: require('../assets/ekonomi.png') },
    { id: '4', name: 'Empat', title: 'Ketahanan Sosial Psikologis', image: require('../assets/psikologis.png') },
    { id: '5', name: 'Lima Lima', title: 'Ketahanan Sosial', image: require('../assets/sosial.png') },
  ];

  if (!fontLoader) {
    return null;
  }

  const renderListItem = ({ item }) => (
    <>
      <Image source={item.image} style={styles.imgList} />
      <View style={styles.viewItem}>
        <View style={[styles.viewTitleList, { backgroundColor: getBackgroundColor(item.name) }]}>
          <Text style={styles.txtTitleList}>{item.name}</Text>
        </View>
        <View style={styles.viewTxtDetail}>
          <Text style={styles.txtLegal}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', { title: item.title });
            }}>
            <Text style={styles.txtDetail}>Detail {'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  const getBackgroundColor = (name) => {
    switch (name) {
      case 'Satu satu':
        return '#F6B9B3';
      case 'Dua dua':
        return '#53F2CF';
      case 'Tiga tiga':
        return '#F8DA6D';
      case 'Empat':
        return '#66C4FF';
      case 'Lima Lima':
        return '#FF8DAF';
      default:
        return '#FFFFFF';
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.txtHai}>Hai, Sarah 👋 </Text>
        <TouchableOpacity>
          <Image source={require('../assets/export.png')} style={styles.icExport} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../assets/banner.png')} style={styles.imgBanner} />
        <View style={styles.txtBanner}>
          <Text style={styles.txtTitle}>Title</Text>
          <Text style={styles.txtDesc}>Description</Text>
        </View>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.txtHai}>Kategori </Text>
        <TouchableOpacity>
          <Text style={styles.txtLain}>Lainnya</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  txtHai: {
    fontSize: hp('2%'),
    textAlign: 'left',
    fontFamily: 'Poppins_500Medium',
  },
  icExport: {
    width: wp('5%'),
    height: hp('3%'),
    marginLeft: hp('0.8%'),
  },
  imgBanner: {
    height: 179,
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    marginBottom: 20,
  },
  txtBanner: {
    position: 'absolute',
    right: 90,
    top: 90,
  },
  txtTitle: {
    fontSize: hp('1.8%'),
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtDesc: {
    fontSize: hp('1.5%'),
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtLain: {
    fontSize: hp('1.5%'),
    fontFamily: 'Poppins_500Medium',
    color: '#808080',
  },
  imgList: {
    height: 118,
    width: wp('90%'),
    alignSelf: 'center',
    margin: wp('2%'),
  },
  viewItem: {
    position: 'absolute', 
    left: 35, 
    top: 20,
  },
  viewTitleList: {
    backgroundColor: '#F6B9B3', 
    height: 24, 
    width: 84, 
    borderRadius: 15, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTxtDetail: {
    marginTop: 30,
  },
  txtTitleList: {
    fontSize: hp('1.2%'),
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtLegal: {
    fontSize: hp('1.4%'),
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtDetail: {
    fontSize: hp('1.2%'),
    fontFamily: 'Poppins_500Medium',
    color: '#808080',
  },
});

export default Home;
