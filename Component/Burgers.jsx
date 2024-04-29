import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const Burgers = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.menuItems}>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/burger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Mini cheese Burger</Text> 
              <Text style={styles.price}>$9.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/burger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Double size burger</Text>
               <Text style={styles.price}>$11.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/burger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Bacon, EGG and Cheese</Text>
               <Text style={styles.price}>$13.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/burger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Pulled porx Burger</Text> 
              <Text style={styles.price}>$18.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/burger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Fried chicken Burger</Text> 
              <Text style={styles.price}>$22.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageColumn}>
          <Image source={require('./pic/burger.jpg')} style={styles.imageB} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15px',
    marginRight: '15px',
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
    alignItems: 'center',
  },
  menuImg: {
    marginRight: '10px',
  },
  menuText: {
    width: 'calc(100% - 100px)',
    backgroundColor: '#fff', // Set your background color here
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    width: 370,
    height: 432,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlight: {
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
   description: {
    fontSize: 16,
    color: '#757575', 
  },
});

export default Burgers;
