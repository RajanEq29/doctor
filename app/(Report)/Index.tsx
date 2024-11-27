import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useViewReportQuery } from '../redux/Api';
import { Linking } from 'react-native';
import Topnavbar from '../navigation/topnavbar';

export default function Report() {
  const { data, isLoading, isSuccess } = useViewReportQuery();
  const [txtData, setTxtData] = useState(null);

  // Fetch and parse the text file data
  const fetchTxtData = async (url) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const parsedData = parseTextToTable(text); // Parse the text into table rows
      setTxtData(parsedData);
    } catch (error) {
      console.error("Error fetching .txt data: ", error);
    }
  };

  // Parse text content into rows and columns
  const parseTextToTable = (text) => {
    const rows = text.split('\n').map(row => row.split(',').map(cell => cell.trim()));
    return rows;
  };

  // Check if data is being fetched
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If data is available and fetched successfully
  if (isSuccess && data) {
    const { reportsData } = data.toReturn;

    return (
      <>
       <Topnavbar />
      
      <ScrollView style={styles.container}>
          
        <Text style={styles.title}>Report Details</Text>

        {/* Iterate over the reportsData object to display different reports */}
        {Object.keys(reportsData).map((testName, index) => {
          const report = reportsData[testName];
          return (
            <View key={index} style={styles.reportSection}>
              <Text style={styles.testName}>{testName}</Text>

              {/* Render file URLs based on the file type */}
              {report.fileType === 'jpg' && report.fileURL?.map((fileUrl, i) => (
                <View key={i} style={styles.imageContainer}>
                  <Image source={{ uri: fileUrl }} style={styles.image} />
                </View>
              ))}
              
              {report.fileType === 'txt' && report.fileURL?.map((fileUrl, i) => (
                <TouchableOpacity key={i} onPress={() => fetchTxtData(fileUrl)}>
                  <Text style={styles.link}>Click to view content: {fileUrl}</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}

        {/* Render parsed table data if available */}
        {txtData && (
          <View style={styles.table}>
            {txtData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, cellIndex) => (
                  <Text key={cellIndex} style={styles.tableCell}>
                    {cell}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      </>
    );
  }

  // If no data or error in fetching
  return (
    <View style={styles.container}>
      <Text>Error loading report data.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  reportSection: {
    marginBottom: 20,
  },
  testName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
});
