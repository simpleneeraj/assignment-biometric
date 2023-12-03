import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusTagProps {
  status: boolean;
  text: string;
}

// bg-green-900: #22c55e
// text-green-300: #8dc73f
// bg-green-500: #d0f2df

const StatusBadge = ({ status, text }: StatusTagProps) => {
  const containerStyles = StyleSheet.compose(styles.container, {
    backgroundColor: status ? '#14532d' : '#450a0a', // adjust based on prop
  });

  const textStyles = StyleSheet.compose(styles.text, {
    color: status ? '#86efac' : '#fca5a5', // adjust based on prop
  });

  const dotStyles = StyleSheet.compose(styles.dot, {
    backgroundColor: status ? '#22c55e' : '#ef4444', // adjust based on prop
  });

  return (
    <View style={containerStyles}>
      <View style={dotStyles} />
      <Text style={textStyles}>{text.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 4,
    gap: 4,
    height: 16,
  },
  text: {
    fontSize: 10, // xs
    fontWeight: '500', // medium
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default StatusBadge;
