
import React, { useState } from 'react';
import { ScrollView, View, Alert, TextInput } from 'react-native';
import { AppText, AppView, BoxView, RowView } from 'react-native-quick-components';
import { ScaledSheet } from "react-native-size-matters";

import Topnavbar from '../navigation/topnavbar';
import { useGetallPaitentDataQuery } from '../redux/Api';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  const { data, isLoading, error } = useGetallPaitentDataQuery();

  // Initialize state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter patients based on the search query
  const patients = data?.data?.data || [];
  const filteredPatients = patients.filter(patient =>
    patient.patientDetails?.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.patientDetails?.healthId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle error and loading states
  if (isLoading) {
    return <AppText>Loading...</AppText>;
  }

  if (error) {
    return <AppText>Error loading patient data</AppText>;
  }

  // Alert for video call
  const handleReport = () => {
    router.push('/(Report)/Index')
  };

  return (
    <AppView style={styles.container}>
      <Topnavbar />
      <AppView style={styles.container1}>
        <View style={styles.content}>
          <AppText C="#333335" F_WEIGHT="700" F_SIZE={19} style={{ fontFamily: 'Biryani, sans-serif' }}>
            Patient List
          </AppText>
          <TextInput
          style={styles.searchBox}
          placeholder="Search by Name or Health ID"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        </View>

        {/* Search Box */}
     

        <ScrollView>
          <BoxView BG="white" MT={20} BOR={20} style={styles.shadowBox}>
            <BoxView P={10}>
              <RowView style={styles.tableHeader}>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>S.No</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>Patient Name</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>Age</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>HealthId</AppText>
              </RowView>
              <AppView style={styles.hr1} />
              {filteredPatients.map((patient, index) => (
                <RowView key={patient._id} style={styles.tableRow} onPress={handleReport}>
                  <AppText F_SIZE={14} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>{index + 1}</AppText>
                  <AppText F_SIZE={14} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>
                    {patient.patientDetails?.fullName || 'N/A'}
                  </AppText>
                  <AppText F_SIZE={14} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>
                    {patient.patientDetails?.age || 'N/A'}
                  </AppText>
                  <AppText F_SIZE={14} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>
                    {patient.patientDetails?.healthId || 'N/A'}
                  </AppText>
                </RowView>
              ))}
            </BoxView>
          </BoxView>
        </ScrollView>
      </AppView>
    </AppView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F6',
  },
  container1: {
    flex: 1,
    margin: '25@msr',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    height: 40,
    width:240,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 8,
 
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  hr1: {
    borderWidth: 0.5,
    marginTop: "10@msr",
    borderColor: "#EFEFEFE5",
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "15@msr",
    paddingVertical: 5,
   
    paddingHorizontal: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "10@msr",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: "#EFEFEFE5",
    
  },

  shadowBox: {
    shadowColor: '#EDEDED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
