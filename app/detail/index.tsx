import React from 'react';
import textStyles from '../../style/text';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/ui';
import { Cell, Row, Table } from '../../components/table';

export default function ModelScreen() {
  return (
    <View style={styles.container}>
      <Table>
        <Row>
          <Cell>
            <Text style={textStyles.base}>Hello</Text>
          </Cell>
          <Cell>
            <Text style={textStyles.base}>Hello</Text>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Text style={textStyles.base}>Hello</Text>
          </Cell>
          <Cell>
            <Text style={textStyles.base}>Hello</Text>
          </Cell>
        </Row>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    padding: 4,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  full: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    borderWidth: 2,
    borderColor: '#343434',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
