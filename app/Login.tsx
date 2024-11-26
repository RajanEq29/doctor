import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AppView, AppImage } from 'react-native-quick-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoginMutation } from '@/app/redux/Api';


export default function LoginScreen() {
    const [login, { isLoading, error }] = useLoginMutation();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            const result = await login({ email, password }).unwrap();
            console.log('Login response:', result);

            if (result && result.data.token) {
                console.log('Login successful', result);

                // Store the token
                await AsyncStorage.setItem('token', result.data.token);

                // Navigate to the tabs screen
                router.replace('/(tabs)');
            } else {
                console.error('No token received in response', result);
                setLoginError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Failed to login', err);
            setLoginError('An error occurred. Please try again.');
        }
    };

    return (
        <AppView>
            <AppView style={{ height: 250, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: 'white' }}>
                <AppImage
                    source={{
                        uri: 'https://doctor.shatayu.online/assets/logo6-668d3c61.png'
                    }}
                    style={{ height: 250, width: 370 }}
                />
            </AppView>
            <AppView style={styles.container1}>
                <View style={styles.container}>
                    <Text style={styles.title}>Doctor Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={setEmail}
              
                
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Password"
                        value={password}
                        onChangeText={setPassword}
                        
                    />
                    {loginError ? <Text style={styles.error}>{loginError}</Text> : null}
                    <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
                        <Text style={styles.buttonText}>{isLoading ? 'Logging in...' : 'Login'}</Text>
                    </TouchableOpacity>
                </View>
            </AppView>
        </AppView>
    );
}

const styles = StyleSheet.create({
    container1: {
        margin: 25
    },
    container: {
        marginTop: 45,
    },
    title: {
        fontSize: 24,
        marginBottom: 25,
        color: '#050A30',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        fontSize: 18,
        borderBottomWidth: 2,
        borderColor: '#050A30',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#050A30',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
