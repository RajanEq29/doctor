import React, { useState } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import { AppText, AppView, BoxView, RowView } from 'react-native-quick-components';
import { ScaledSheet, ms } from 'react-native-size-matters';  // Responsive units
import Topnavbar from '../navigation/topnavbar';
import { useGetallPaitentDataQuery } from '../redux/Api';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  const { data, isLoading, error } = useGetallPaitentDataQuery();
  const [searchQuery, setSearchQuery] = useState('');

  const patients = data?.data?.data || [];
  const filteredPatients = patients.filter(patient =>
    patient.patientDetails?.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.patientDetails?.healthId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <AppText>Loading...</AppText>;
  if (error) return <AppText>Error loading patient data</AppText>;

  const handleReport = (patientId) => {
    router.push({ pathname: '/(Report)/Index', params: { id: patientId } });
  };

  return (
    <AppView style={styles.container}>
      <Topnavbar />
      <AppView style={styles.container1}>
        <View style={styles.content}>
          <AppText style={styles.title}>Patient List</AppText>
          <TextInput
            style={styles.searchBox}
            placeholder="Search by Name or Health ID"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Patient Table */}
        <ScrollView>
          <BoxView BG="white" MT={20} BOR={20} style={styles.shadowBox}>
            <BoxView P={10}>
              <RowView style={styles.tableHeader}>
                <AppText style={styles.headerText}>S.No</AppText>
                <AppText style={styles.headerText}>Patient Name</AppText>
                <AppText style={styles.headerText}>Age</AppText>
                <AppText style={styles.headerText}>Health ID</AppText>
              </RowView>
              <AppView style={styles.hr1} />

              {filteredPatients.map((patient, index) => (
                <RowView
                  key={patient._id}
                  style={styles.tableRow}
                  onPress={() => handleReport(patient._id)}
                >
                  <AppText style={styles.cellText}>{index + 1}</AppText>
                  <AppText style={styles.cellText} numberOfLines={1} ellipsizeMode="tail">
                    {patient.patientDetails?.fullName || 'N/A'}
                  </AppText>
                  <AppText style={styles.cellText}>{patient.patientDetails?.age || 'N/A'}</AppText>
                  <AppText style={styles.cellText}>{patient.patientDetails?.healthId || 'N/A'}</AppText>
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
    margin: '20@msr',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10@msr',
  },
  title: {
    color: '#333335',
    fontWeight: '700',
    fontSize: '19@msr',
  },
  searchBox: {
    height: '40@msr',
    width: '60%',  // Relative width for responsiveness
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: '16@msr',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '10@msr',
  },
  hr1: {
    borderWidth: 0.5,
    marginTop: '10@msr',
    borderColor: '#EFEFEF',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '5@msr',
  },
  headerText: {
    fontSize: '14@msr',
    color: '#050A30',
    flex: 1,  // Distribute columns equally
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '10@msr',
    borderBottomWidth: 0.5,
    borderColor: '#EFEFEF',
  },
  cellText: {
    fontSize: '14@msr',
    color: '#050A30',
    flex: 1,
    textAlign: 'center',
  },
  shadowBox: {
    shadowColor: '#EDEDED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
