import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../Config';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signinUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  //change the password
  const forgetPassword = () => {
  firebase.auth().sendPasswordResetEmail(email)
  .then(() =>{
    alert("Password rest email sent")
  }).catch((error) =>{
    alert(error)
  })
  }
  

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image source={require('../assets/current_icon.png')} style={{ width: 40, height: 40 }} />
        <Text style={{ fontSize: 30, color: '#FFC300', marginLeft: 5 }}>bajlibachain</Text>
      </View>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => signinUser(email, password)} style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>{forgetPassword()}  } style={styles.forgotButton}>
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001d3d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  signInButton: {
    backgroundColor: '#FFC300',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  forgotButton: {
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default SignInScreen;
