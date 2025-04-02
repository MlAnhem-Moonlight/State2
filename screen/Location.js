import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import map_icon from '../assets/map_icon.png';
import React, { useState } from 'react';

const Location = ({ navigation }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = () => {
    console.log('Selected Zone:', selectedZone);
    console.log('Selected Area:', selectedArea);
    // Add your submit logic here
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="#000" />
        </TouchableOpacity>
        <View>
          <Image
            source={map_icon}
            style={{
              width: 225,
              height: 172,
              alignSelf: 'center',
              marginTop: 100,
              marginBottom: 20,
            }}
          />
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 26, marginBottom: 10 }}>
            Select your location
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              marginTop: 5,
              color: '#7C7C7C',
              lineHeight: 24,
            }}
          >
            Switch on your location to stay in tune with
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              color: '#7C7C7C',
              lineHeight: 24,
            }}
          >
            what’s happening in your area
          </Text>

          {/* Dropdown for Zone */}
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedZone}
              onValueChange={(itemValue) => setSelectedZone(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Zone" value="" />
              <Picker.Item label="North Zone" value="north" />
              <Picker.Item label="South Zone" value="south" />
              <Picker.Item label="East Zone" value="east" />
              <Picker.Item label="West Zone" value="west" />
            </Picker>
          </View>

          {/* Dropdown for Area */}
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedArea}
              onValueChange={(itemValue) => setSelectedArea(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Area" value="" />
              <Picker.Item label="Area 1" value="area1" />
              <Picker.Item label="Area 2" value="area2" />
              <Picker.Item label="Area 3" value="area3" />
              <Picker.Item label="Area 4" value="area4" />
            </Picker>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#53B175',
    paddingVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
