import React ,{useState} from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Burger = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.menuItems}>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/mini_cheeseburgers.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Mini cheese Burger</Text> 
              <Text style={styles.price}>$9.00</Text></Text>
              <Text style={styles.description} >Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/doubleSizedBurger.jpg')} style={styles.image} />
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
              <Image source={require('./pic/pulledPorkBurger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Pulled pork Burger</Text> 
              <Text style={styles.price}>$18.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuImg}>
              <Image source={require('./pic/friedChickenBurger.jpg')} style={styles.image} />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.title}><Text style={styles.highlight}>Fried chicken Burger</Text> 
              <Text style={styles.price}>$22.00</Text></Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
            </View>
          </View>
        </View>
        {/* When clicked particular picture The picture should come here */}
        <View style={styles.imageColumn}>
          <Image source={require('./pic/burger.jpg')} style={styles.imageB} />
        </View>

        {/*<View style={styles.imageContainer}>
          <Image source={require('./pic/burger.jpg')} style={styles.imageB} />
          <View style={styles.countBox}>
            <TouchableOpacity  style={styles.Box} onPress={decrementCount}>
              <Text style={styles.countButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={incrementCount}>
              <Text style={styles.countButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>*/}

      </View>
    </View>
     {/*
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={selectedImage} style={styles.enlargedImage} />
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
     */}
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

export default Burger;
