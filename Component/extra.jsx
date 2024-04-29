import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuItem = () => {
  return (
    <View style={styles.menuText}>
      <Text style={styles.heading}>
        <Text style={styles.span}>Mini cheese Burger</Text> 
        <Text style={styles.strong}>$9.00</Text>
        <Text style={styles.after}></Text>
      </Text>
      <Text style={styles.paragraph}>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuText: {
    marginBottom: 20, // Adjust as needed
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'relative',
  },
  span: {
    // Add styles for <span> equivalent
  },
  strong: {
    // Add styles for <strong> equivalent
  },
  paragraph: {
    marginTop: 5, // Adjust as needed
  },
  after: {
    position: 'absolute',
    width: '100%',
    height: 0,
    top: 13,
    left: 0,
    borderTopWidth: '2px dotted #cccccc',
    zIndex: -1,
    boxSizing: 'border-box',
  },
});

export default MenuItem;
