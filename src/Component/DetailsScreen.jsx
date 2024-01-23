// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>{item.description}</Text>
    </View>
  );
};

export default DetailsScreen;
