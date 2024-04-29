import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const Beverage = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.menuItems}>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/juice.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}>
              <Text style={styles.highlight}>Single Cup Brew</Text> 
              <Text style={styles.price}>$7.00</Text>
              </Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/juice.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Caffe Americano</Text>
               <Text style={styles.price}>$9.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/juice.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Caramel Macchiato</Text>
               <Text style={styles.price}>$15.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/juice.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Standard black coffee</Text> 
              <Text style={styles.price}>$8.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/juice.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Standard black coffeer</Text> 
              <Text style={styles.price}>$12.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageColumn}>
          <Image source={require('./pic/juice.jpg')} style={styles.imageB} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 200
  },
  row: {
    flexDirection: 'row',
  },
  menuItems: {
    flex: 1,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'left',
  },
  menuImg: {
    marginRight: '10px',
  },
  menuText: {
    flex: 1,
    marginRight: 10,
  },
  imageColumn: {
    flex: 1,
    height: 550,
    width: 400,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: '20px',
    borderRadius: '100px',
    padding: '20px',
  },
   imageB: {
    width: 380,
    height: 432,
    resizeMode: 'cover',
    borderRadius: '15px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlight: {
    color: 'black',
    display: 'inline-block',
    float : 'left',
  },
  price: {
    fontWeight: 'bold',
    color: '#fbaf32',
    display: 'inline-block',
    float : 'right',
    padding: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    color: '#757575',
    fontFamily: 'open sans, sans-serif' , 
  },
});

export default Beverage;