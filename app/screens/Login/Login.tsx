import {
  View,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error);
      alert('sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert('Sign up successful, now go to Sign in!');
    } catch (error: any) {
      console.log(error);
      alert('sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            value={password}
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <CustomButton
                title="Sign In"
                onPress={signIn}
                buttonStyle={styles.customButton}
                textStyle={{
                  fontFamily: 'Inter',
                }}
              />
              <CustomButton
                title="Sign Up"
                onPress={signUp}
                buttonStyle={styles.customButton}
                textStyle={{
                  fontFamily: 'Inter',
                }}
              />
            </>
          )}
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

export default Login;
