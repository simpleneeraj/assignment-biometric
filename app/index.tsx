import React from 'react';
import { Image } from 'expo-image';
import textStyles from '../style/text';
import { useRouter } from 'expo-router';
import { Text, View } from '../components/ui';
import FadeInView from '../components/fade-in';
import StatusBadge from '../components/badge';
import { TouchableOpacity, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

enum IMAGES {
  TOUCH = 'https://img.icons8.com/color/512/touch-id.png',
  DONE = 'https://img.icons8.com/nolan/512/checkmark.png',
}

export default function TabOneScreen() {
  const router = useRouter();
  const [isBiometricSupported, setBiometric] = React.useState(false);
  const [isAuthenticated, setAuthenticate] = React.useState(false);

  // Check if hardware supports biometrics
  const checkBiometricCompatibility = async () => {
    const isCompatible = await LocalAuthentication.hasHardwareAsync();
    setBiometric(isCompatible);
  };

  React.useEffect(() => {
    checkBiometricCompatibility();
  }, []);

  const onAuthenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to proceed',
        requireConfirmation: true,
        fallbackLabel: 'Enter Password',
      });

      if (result.success) {
        setAuthenticate(true);
      } else {
        setAuthenticate(false);
        console.log('Authentication failed or canceled');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.full]}>
        <View style={styles.badge}>
          <View style={styles.center}>
            <FadeInView>
              <StatusBadge
                status={isBiometricSupported}
                text={
                  isBiometricSupported
                    ? 'Biometric authentication available'
                    : 'Biometric authentication not supported'
                }
              />
            </FadeInView>
          </View>
        </View>
        <View style={styles.section}>
          <Image
            style={styles.image}
            source={isAuthenticated ? IMAGES.DONE : IMAGES.TOUCH}
          />
        </View>
        <View style={styles.section}>
          <Text style={[textStyles.xl, styles.textCenter]}>
            {isAuthenticated
              ? 'Touch ID recognition successful'
              : 'Sign in with Touch ID'}
          </Text>
          <Text style={[textStyles.base, styles.textCenter]}>
            {isAuthenticated
              ? 'Unleash the hidden potential of your device by unlocking its secrets...'
              : 'Experience the ease and security of fingerprint authentication.'}
          </Text>
        </View>
      </View>
      <View style={[styles.section, styles.buttonContainer]}>
        {isAuthenticated ? (
          <TouchableOpacity
            onPress={() => router.push('/model')}
            activeOpacity={0.9}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {'Dive into device specifications'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onAuthenticate}
            activeOpacity={0.9}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{'Use Touch ID to proceed'}</Text>
          </TouchableOpacity>
        )}
      </View>
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
  buttonContainer: {
    position: 'relative',
    bottom: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: '#343434',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    ...textStyles.base,
  },
});
