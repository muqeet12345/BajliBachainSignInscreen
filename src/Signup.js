import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { firebase } from '../Config';

const Signup = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  registerUser = async (firstname, lastname, email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://test-52748.firebaseapp.com',
        })
          .then(() => {
            alert('Verification email sent')
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firebase.firestore().collection('users')
              .doc(firestore.auth().currentUser.uid)
              .set({
                firstname,
                lastname,
                email,
              })
          })
          .catch((error => {
            alert(error.message)
          }))

      })
      .catch((error => {
        alert(error.message)
      }))

  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image source={require('../assets/current_icon.png')} style={{ width: 40, height: 40 }} />
          <Text style={{ fontSize: 30, color: '#FFC300', marginLeft: 5 }}>bajlibachain</Text>
        </View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(firstname) => setFirstName(firstname)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(lastname) => setLastName(lastname)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => registerUser(firstname, lastname, email, password)} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#001D3D',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    fontStyle: 'italic',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  signUpButton: {
    backgroundColor: '#FFC300',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Signup;
