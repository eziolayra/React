import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Burgers from './Burgers';
import Beverage from './Beverage';
import Snack from './Snack';

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('Burgers');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Burgers':
        return <Burgers />;
      case 'Snack':
        return <Snack />;
      case 'Beverage':
        return <Beverage />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Burgers' && styles.activeTab]}
          onPress={() => setActiveTab('Burgers')}>
          <Text style={[styles.tabText, activeTab === 'Burgers' && styles.activeTabText]}>Burgers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Snack' && styles.activeTab]}
          onPress={() => setActiveTab('Snack')}>
          <Text style={[styles.tabText, activeTab === 'Snack' && styles.activeTabText]}>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Beverage' && styles.activeTab]}
          onPress={() => setActiveTab('Beverage')}>
          <Text style={[styles.tabText, activeTab === 'Beverage' && styles.activeTabText]}>Beverages</Text>
        </TouchableOpacity>
      </View>
      {renderComponent()} {/* Render the component based on the active tab */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fbaf32',
  },
  activeTab: {
    backgroundColor: '#719a0a',
  },
  tabText: {
    color: '#fff',
  },
  activeTabText: {
    color: '#fff',
  },
});


export default MenuTabs;
