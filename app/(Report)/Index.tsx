import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { useLocalSearchParams } from 'expo-router';
import Topnavbar from '../navigation/topnavbar';
 // Adjust the import as needed

export default function Model() {
  const { id } = useLocalSearchParams();
  const [mid,setMid]=useState(id)
 
  const pdfUrl = `https://shatayu.online/kiosk/downloadPDF/66eab2a1a891d72baa4c4193`;
  const googleDocsUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  // Function to download the PDF
  const downloadPDF = async () => {
    try {
      const fileUri = `${FileSystem.documentDirectory}${mid}.pdf`;  // Save as 'id.pdf'
      const { uri } = await FileSystem.downloadAsync(pdfUrl, fileUri);
      Alert.alert('Download Complete', `PDF saved to: ${uri}`);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      Alert.alert('Error', 'Failed to download the PDF.');
    }
  };

  return (
    <View style={styles.container}>
<Topnavbar/>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
      <Button title="Download PDF" style={styles.button} onPress={downloadPDF} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
