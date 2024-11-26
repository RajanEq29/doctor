import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Button } from 'react-native';
// Ensure correct path
import { AppText, AppView, BoxView, RowView } from 'react-native-quick-components';
import { ScaledSheet } from "react-native-size-matters";
import { useRouter } from 'expo-router';  // Import useRouter


import Topnavbar from '@/app/navigation/topnavbar';
import { useGetAllPatientDataQuery } from '@/app/redux/Api';


export default function Index() {
  const { data, isSuccess } = useGetAllPatientDataQuery();
  const router = useRouter();  // Initialize the router
 
  return (
    <AppView style={styles.container}>
      <Topnavbar />
      <AppView style={styles.container1}>
        <View style={styles.content}>
          <AppText C="#333335" F_WEIGHT="700" F_SIZE={23} style={{ fontFamily: 'Biryani, sans-serif' }}>
            Kiosk List
          </AppText>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <BoxView BG="white" MT={20} BOR={20} style={styles.shadowBox}>
            <BoxView P={10}>
              <AppView style={styles.hrRow} />
              <AppView style={styles.hr} />
              <RowView style={styles.tableHeader}>
                <AppText F_SIZE={16} C="#050A30">S.No</AppText>
                <AppText F_SIZE={16} C="#050A30">Kiosk Name</AppText>
                <AppText F_SIZE={16} C="#050A30">Patient</AppText>
                <AppText F_SIZE={16} C="#050A30">Video Call</AppText>
              </RowView>
              <AppView style={styles.hr1} />
              {isSuccess && data.data.map((item, index) => (
                <RowView key={item._id} style={styles.tableRow}>
                  <AppText F_SIZE={16} C="#050A30">{index + 1}</AppText>
                  <AppText F_SIZE={16} C="#353A5E">{item.name_of_center}</AppText>
                  <AppText F_SIZE={16} C="#353A5E">{item.no_of_patients_in_WR}</AppText>
                  <Button title="Go to Call Screen"  />
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
  hr: {
    borderWidth: 1,
    marginTop: '10@msr',
    borderColor: "#EFEFEFE5",
  },
  hr1: {
    borderWidth: 0.5,
    marginTop: "10@msr",
    borderColor: "#EFEFEFE5",
  },
  hrRow: {
    marginTop: "10@msr",
    borderColor: "#EFEFEFE5",
    borderWidth: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "15@msr",
    paddingVertical: '10@msr',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "20@msr",
    alignItems: 'center',
  },
  shadowBox: {
    shadowColor: '#EDEDED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: "10@msr",
    backgroundColor: '#050A30',
    padding: "10@msr",
    paddingLeft: "20@msr",
    paddingRight: '20@msr',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});
