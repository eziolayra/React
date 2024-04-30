import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// Reusable MenuItem component
const MenuItem = ({ image, handleImageClick, title, price, description }) => (
  <TouchableOpacity onPress={() => handleImageClick(image)}>
    <View style={styles.menuItem}>
      <View style={styles.menuImg}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.menuText}>
        <Text style={styles.title}><Text style={styles.highlight}>{title}</Text>
          <Text style={styles.price}>${price}</Text></Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Beverage = () => {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    // Set default image as Mini cheeseburgers when component mounts
    setSelectedImage(require('./pic/CupBrew.jpg'));
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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
            <MenuItem
              image={require('./pic/CupBrew.jpg')}
              handleImageClick={handleImageClick}
              title="Cup Brew"
              price="7.00"
              description="Lorem ipsum dolor sit amet elit. Phasel nec preti facil"
            />
            <MenuItem
              image={require('./pic/Americano.jpg')}
              handleImageClick={handleImageClick}
              title="Americano"
              price="9.00"
              description="Lorem ipsum dolor sit amet elit. Phasel nec preti facil"
            />
            <MenuItem
              image={require('./pic/Macchiato.jpg')}
              handleImageClick={handleImageClick}
              title="Caramel Macchiato"
              price="15.00"
              description="Lorem ipsum dolor sit amet elit. Phasel nec preti facil"
            />
            <MenuItem
              image={require('./pic/BlackCoffee.jpg')}
              handleImageClick={handleImageClick}
              title="Black Coffee"
              price="12.00"
              description="Lorem ipsum dolor sit amet elit. Phasel nec preti facil"
            />
            {/* Add other MenuItem components for other menu items */}
            </View>
            {/* Display the selected image here */}
            <View style={styles.selectedImageContainer}>
                {selectedImage && <Image source={selectedImage} style={styles.selectedImage} />}
                <View style={styles.countContainer}>
                  <View style={styles.countButtonContainer}>
                    <TouchableOpacity onPress={decrementCount} style={styles.countButton}>
                      <Text style={styles.countButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countBox}>
                      <Text style={styles.countText}>{count}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={incrementCount} style={styles.countButton}>
                      <Text style={styles.countButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Order now</Text>
                  </TouchableOpacity>
                </View>
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
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 100,
    padding: 20,
  },
  selectedImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  selectedImage: {
    width: 380,
    height: 432,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlight: {
    color: 'black',
    display: 'inline-block',
    float: 'left',
  },
  price: {
    fontWeight: 'bold',
    color: '#fbaf32',
    display: 'inline-block',
    float: 'right',
    padding: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    color: '#757575',
    fontFamily: 'open sans, sans-serif',
  },
  countContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  countButtonContainer: {
  flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10, 
},
  countButton: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  countButtonText: {
    fontSize: 16,
    color: '#000',
  },
  countBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  orderButton: {
    backgroundColor: '#fbaf32',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  orderButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Beverage;
