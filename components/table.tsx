// Table.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Table = ({ children }: React.PropsWithChildren<{}>) => {
  return <View style={styles.table}>{children}</View>;
};

export const Row = ({ children }: React.PropsWithChildren<{}>) => {
  return <View style={styles.row}>{children}</View>;
};

export const Cell = ({ children }: React.PropsWithChildren<{}>) => {
  return <View style={styles.cell}>{children}</View>;
};

const styles = StyleSheet.create({
  table: {
    marginVertical: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#222',
  },
});
