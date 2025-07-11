import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, alignItems: 'center', backgroundColor: '#orange' }}>
      {/* Decorative Spots */}
      <View style={[styles.spot, { top: 60, left: 30, backgroundColor: '#orange', opacity: 0.18, width: 120, height: 120 }]} />
      <View style={[styles.spot, { bottom: 80, right: 40, backgroundColor: '#orange', opacity: 0.13, width: 90, height: 90 }]} />
      <View style={[styles.spot, { top: 200, right: 60, backgroundColor: '#fff', opacity: 0.07, width: 60, height: 60 }]} />
      {/* Smaller Dots */}
      <View style={[styles.spot, { top: 120, left: 80, backgroundColor: '#orange', opacity: 0.22, width: 24, height: 24 }]} />
      <View style={[styles.spot, { bottom: 160, right: 100, backgroundColor: '#fff', opacity: 0.15, width: 16, height: 16 }]} />
      <View style={[styles.spot, { top: 300, left: 40, backgroundColor: '#orange', opacity: 0.18, width: 18, height: 18 }]} />
      <View style={[styles.spot, { bottom: 200, left: 60, backgroundColor: '#orange', opacity: 0.18, width: 12, height: 12 }]} />
      {/* Sparkles */}
      <View style={[styles.sparkle, { top: 100, left: 180 }]} />
      <View style={[styles.sparkle, { top: 250, right: 60 }]} />
      <View style={[styles.sparkle, { bottom: 120, left: 100 }]} />
      <View style={[styles.sparkle, { bottom: 60, right: 120 }]} />
      <View style={[styles.sparkle, { top: 180, left: 60 }]} />
      {/* Main Content */}
      <Text
        style={{
          fontSize: 36,
          marginBottom: 18,
          color: '#orange',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontFamily: Platform.OS === 'ios' ? 'Snell Roundhand' : 'cursive',
          textShadowColor: '#orange',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 8,
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 80,
          fontWeight: 'bold',
          marginBottom: 40,
          fontStyle: 'italic',
          fontFamily: Platform.OS === 'ios' ? 'Snell Roundhand' : 'cursive',
          color: '#orange',
          textShadowColor: '#orange',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 8,
        }}
      >
        Kinet
      </Text>

      <TouchableOpacity
        style={styles.purpleButton}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.8}
      >
        <Text style={[styles.purpleButtonText, { color: '#orange' }]}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ marginTop: 20 }}>
        <Text style={{ color: '#orange' }}>
          Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  purpleButton: {
    backgroundColor: '#orange',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#orange',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 8,
  },
  purpleButtonText: {
    color: '#16161a',
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 1,
  },
  spot: {
    position: 'absolute',
    borderRadius: 100,
  },
  sparkle: {
    position: 'absolute',
    width: 14,
    height: 14,
    backgroundColor: 'transparent',
    borderColor: '#orange', // light purple sparkle
    borderWidth: 1.5,
    borderRadius: 7,
    opacity: 0.7,
    // sparkle effect: cross
    shadowColor: '#orange', // light purple glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    zIndex: 1,
  },
});

export default WelcomeScreen;
