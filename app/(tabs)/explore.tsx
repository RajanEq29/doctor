
import Topnavbar from '@/app/navigation/topnavbar';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { AppButton, AppText, AppView, BoxView, RowView } from 'react-native-quick-components';
import { ScaledSheet } from "react-native-size-matters";

export default function TabTwoScreen() {
  const data = [
    { id: '1', name: 'John Doe', age: 28, gender: 'Male', halthId: 'AHRBJ12' },
    { id: '2', name: 'Jane Doe', age: 22, gender: 'Female', halthId: 'AHRBJ16' },
    { id: '3', name: 'Sam Smith', age: 24, gender: 'Male', halthId: 'AHBJ100' },
    { id: '4', name: 'Sara Wilson', age: 29, gender: 'Female', halthId: 'AHRBJ19' },
  ];

  const reportData = () => {
    Alert.alert("Coming to video call");
  };

  return (
    <AppView style={styles.container}>
      <Topnavbar />
      <AppView style={styles.container1}>
        <View style={styles.content}>
          <AppText C="#333335" F_WEIGHT="700" F_SIZE={23} style={{ fontFamily: 'Biryani, sans-serif' }}>
          Paitent List
          </AppText>
        </View>
        <ScrollView>
          <BoxView BG="white" MT={20} BOR={20} style={styles.shadowBox}>
            <BoxView P={10}>
              {/* <AppView style={styles.hrRow} /> */}
              {/* <AppView style={styles.hr} /> */}
              <RowView style={styles.tableHeader}>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>S.No</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>Patient Name</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>Age</AppText>
                <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>HealthId</AppText>
              </RowView>
              <AppView style={styles.hr1} />
              {data.map((item, index) => (
                <RowView key={item.id} style={styles.tableRow}>
                  <AppText F_SIZE={16} C="#050A30" style={{ fontFamily: 'Biryani, sans-serif' }}>{index + 1}</AppText>
                  <AppText F_SIZE={16} C="#353A5E" style={{ fontFamily: 'Biryani, sans-serif' }}>{item.name}</AppText>
                  <AppText F_SIZE={16} C="#353A5E" style={{ fontFamily: 'Biryani, sans-serif' }}>{item.age}</AppText>
                  <AppText F_SIZE={16} C="#353A5E" style={{ fontFamily: 'Biryani, sans-serif' }}>{item.halthId}</AppText>
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
    paddingVertical: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "40@msr",
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
});
