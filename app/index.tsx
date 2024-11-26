// app/index.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native'; // Import for showing a loading indicator

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Simulate an async check (e.g., from local storage or API)
      setTimeout(() => {
        const isLoggedIn = false; // Replace with actual login status check logic

        if (isLoggedIn) {
          router.replace('/(tabs)'); // Navigate to the main app if logged in
        } else {
          router.replace('/Login'); // Navigate to the login screen if not logged in
        }

        setIsReady(true); // Mark the process as complete
      }, 1000); // Simulated delay of 1 second
    };

    checkLoginStatus(); // Invoke the login status check
  }, [router]); // Add `router` as a dependency

  if (!isReady) {
    // Show a loading spinner while checking the login status
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  // Return null as the component will redirect before reaching this point
  return null;
}

// Simple styles for the loader container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color if needed
  },
});
