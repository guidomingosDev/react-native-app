import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const carouselItems = [
    require('../assets/CB.jpeg'),
    require('../assets/logo.png'),
    require('../assets/Michele-Cinturao-UFC.png'),
    require('../assets/CB.jpeg'),
    require('../assets/logo.png'),
    require('../assets/Michele-Cinturao-UFC.png'),
  ];
  const handleNewScreen = () => {
    // Implement your login logic here
    // For example, you can check the credentials and navigate to the home screen
    navigation.navigate('NewScreen');
  };
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerHome}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Header Text</Text>
        </View>
        <View style={styles.container}>
          <Carousel
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={900}
            itemWidth={300}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={carouselItems.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.8}
          />
        </View>
        <View style={styles.containerLesson}>
          <TouchableOpacity onPress={handleNewScreen} style={styles.lesson}>
            <Text>Aulas</Text>
          </TouchableOpacity>
          <View style={styles.lesson}>
            <Text>Loja</Text>
          </View>
        </View>
        <View style={styles.containerLesson}>
          <View style={styles.lesson}>
            <Text>Conheça nossos atletas</Text>
          </View>
          <View style={styles.lesson}>
            <Text>Seja parceiro</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  containerHome: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    margin: '10%',
    borderColor: '#CFCFCF',
    marginTop: 80,
    position: 'relative',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingLeft: 16,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  carouselItem: {
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 's',
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -50,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  counterText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  containerLesson: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  lesson: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 150,
    backgroundColor: '#ADADAD',
    borderRadius: 10,
    marginBottom: 10,
    margin: 10
  },
});

export default HomeScreen;
