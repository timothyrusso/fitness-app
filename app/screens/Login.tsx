import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
            console.log(error)
            alert('sign in failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
          const response = await createUserWithEmailAndPassword(auth, email, password);
          alert('Sign up successful, now go to Sign in!')
        } catch (error: any) {
            console.log(error)
            alert('sign in failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
    { loading ? <ActivityIndicator size="large" color="#0000ff" /> 
    : <>
        <Button title='Sign In' onPress={signIn} />
        <Button title='Sign Up' onPress={signUp} />
    </>}
    </KeyboardAvoidingView>
    </View>
  )
}

export default Login

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 10,
        height: 50,
        borderWidth: 1.5,
        borderRadius: 28,
        padding: 20,
        backgroundColor: '#fff',
    }
});
