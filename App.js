import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuTabs from './Component/ButtonClick';
import { ScrollView } from 'react-native-web';

const App = () => {
  const [activeTab, setActiveTab] = useState('beverages');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Food Menu
      </Text>
      <Text style={styles.headI}>
        Delicious Food Menu
      </Text>
      <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Your content based on activeTab */}
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  text: {
    color: '#719a0a',
    marginBottom: '5px',
    position: 'relative',
    fontSize: '20',
    textAlign: 'center',
  },
  headI: {
    textAlign: 'center',
    boxSizing: 'border-box', 
    color: '#454545',
    fontFamily: 'Nunito, sans-serif', // You may need to load the 'Nunito' font separately
    margin: 0,
    position: 'relative',
    fontSize: 40,
    fontWeight: '600',
  }
});

export default App;
