import React, { useEffect, useState } from 'react';
import textStyles from '../style/text';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/ui';
import { Cell, Row, Table } from '../components/table';
import * as Cellular from 'expo-cellular';
import * as Device from 'expo-device';
import * as Network from 'expo-network';
import convertBytes from '../utils/convert-bytes';

export default function Modal() {
  const [cellular, setCellular] = useState({
    carrierName: '',
    countryCode: '',
  });

  useEffect(() => {
    (async () => {
      const carrierName = (await Cellular.getCarrierNameAsync()) as string;
      const countryCode = (await Cellular.getIsoCountryCodeAsync()) as string;

      setCellular({
        carrierName,
        countryCode,
      });
    })();
  }, []);

  const [networks, setNetworks] = useState({
    ip: '',
    airplane: false,
  });

  useEffect(() => {
    (async () => {
      const ip = await Network.getIpAddressAsync();
      const airplane = await Network.isAirplaneModeEnabledAsync();
      setNetworks({
        airplane,
        ip,
      });
    })();
  }, []);

  const deviceData = [
    { key: 'Brand', value: Device.brand },
    { key: 'Manufacturer', value: Device.manufacturer },
    { key: 'Model Name', value: Device.modelName },
    { key: 'Device Type', value: Device.deviceType },
    { key: 'Device Year', value: Device.deviceYearClass },
    { key: 'Total Memory', value: convertBytes(Number(Device.totalMemory)) },
    { key: 'Operating System', value: Device.osName },
    { key: 'Android Version', value: Device.osVersion },
    { key: 'PlatformApiLevel', value: Device.platformApiLevel || null },
    { key: 'Device Name', value: Device.deviceName },
  ];

  deviceData.sort((a, b) => a.key.localeCompare(b.key));

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.section]}>
          <Text style={[textStyles.base]}>Cellular</Text>
          <Table>
            {cellular.carrierName && (
              <Row>
                <Cell>
                  <Text style={textStyles.base}>{'Carrier Name'}</Text>
                </Cell>
                <Cell>
                  <Text style={textStyles.base}>{cellular.carrierName}</Text>
                </Cell>
              </Row>
            )}
            {cellular.countryCode && (
              <Row>
                <Cell>
                  <Text style={textStyles.base}>{'Country Code'}</Text>
                </Cell>
                <Cell>
                  <Text style={textStyles.base}>{cellular.countryCode}</Text>
                </Cell>
              </Row>
            )}
          </Table>
        </View>
        <View style={[styles.section]}>
          <Text style={[textStyles.base]}>Network</Text>
          <Table>
            {networks.ip && (
              <Row>
                <Cell>
                  <Text style={textStyles.base}>{'IP Address'}</Text>
                </Cell>
                <Cell>
                  <Text style={textStyles.base}>{networks.ip}</Text>
                </Cell>
              </Row>
            )}
            {networks.airplane && (
              <Row>
                <Cell>
                  <Text style={textStyles.base}>{'Airplane Mode'}</Text>
                </Cell>
                <Cell>
                  <Text style={textStyles.base}>{networks.ip}</Text>
                </Cell>
              </Row>
            )}
          </Table>
        </View>
        <View style={[styles.section]}>
          <Text style={[textStyles.base]}>Device</Text>
          <Table>
            {deviceData.map((item, index) => (
              <Row key={index}>
                <Cell>
                  <Text style={textStyles.base}>{item.key}</Text>
                </Cell>
                <Cell>
                  <Text style={textStyles.base}>{item.value}</Text>
                </Cell>
              </Row>
            ))}
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  section: {
    padding: 4,
  },
  textCenter: {
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
