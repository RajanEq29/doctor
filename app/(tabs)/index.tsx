import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { AppText, AppView, BoxView, RowView } from 'react-native-quick-components';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useRouter } from 'expo-router';
import { useGetAllPatientDataQuery } from '../redux/Api';
import Topnavbar from '../navigation/topnavbar';

export default function Index() {
  const { data, isSuccess } = useGetAllPatientDataQuery();
  const router = useRouter();

  return (
    <AppView style={styles.container}>
      <Topnavbar />
      <AppView style={styles.container1}>
        <View style={styles.content}>
          <AppText style={styles.title}>Kiosk List</AppText>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <BoxView BG="white" MT={20} BOR={20} style={styles.shadowBox}>
            <BoxView P={10}>
              <RowView style={styles.tableHeader}>
                <AppText style={styles.headerText}>S.No</AppText>
                <AppText style={styles.headerText}>Kiosk Name</AppText>
                <AppText style={styles.headerText}>Patient</AppText>
                <AppText style={styles.headerText}>Video Call</AppText>
              </RowView>
              <AppView style={styles.hr} />

              {isSuccess && data.data.map((item, index) => (
                <RowView key={item._id} style={styles.tableRow}>
                  <AppText style={styles.cellText}>{index + 1}</AppText>
                  <AppText style={styles.cellText} numberOfLines={1} ellipsizeMode="tail">
                    <BoxView
                      H={10}
                      W={10}
                      BOR={500}
                      style={[
                        styles.statusIndicator,
                        item.status === 'Login' ? { backgroundColor: 'green' } :
                          item.status === 'Logout' ? { backgroundColor: 'red' } :
                            { backgroundColor: '#FFBF00' } // Default for 'not_logged_in'
                      ]}
                    /> {item.name_of_center}
                  </AppText>
                  <AppText style={styles.cellText}>{item.no_of_patients_in_WR}</AppText>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/videoCall/call')}
                  >
                    <Text style={styles.buttonText}>Video Call</Text>
                  </TouchableOpacity>
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
    marginHorizontal: '20@msr',
    marginTop: '10@msr',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15@msr',
  },
  title: {
    color: '#333335',
    fontWeight: '700',
    fontSize: '20@msr',
  },
  scrollViewContent: {
    paddingBottom: '20@msr',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#EFEFEFE5',
    marginVertical: '10@msr',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '10@msr',
  },
  headerText: {
    fontSize: '14@msr',
    color: '#050A30',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10@msr',
    borderBottomWidth: 0.5,
    borderColor: '#EFEFEF',
  },
  cellText: {
    fontSize: '14@msr',
    color: '#353A5E',
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#050A30',
    paddingVertical: '8@msr',
    paddingHorizontal: '12@msr',
    borderRadius: '8@msr',
  },
  buttonText: {
    color: '#fff',
    fontSize: '14@msr',
    fontWeight: 'bold',
  },
  shadowBox: {
    shadowColor: '#EDEDED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: '10@msr',
  },
  statusIndicator: {
    height: '10@msr',
    width: '10@msr',
    borderRadius: '5@msr', // Half of width/height for a circle
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
