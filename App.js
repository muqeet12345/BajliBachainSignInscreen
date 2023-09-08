import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./Config";

import SignIn from "./src/SignIn";
import Signup from "./src/Signup";
import Dashboard from "./src/Dashboard";
import Header from "./Component/Header";

const stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <stack.Navigator>
        <stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            
            
          }}
        />
        <stack.Screen
          name="Signup"
          component={Signup}
          options={{
            
          }}
        />
      </stack.Navigator>
    );
  }
  return (
    <stack.Navigator>
      <stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name="mq" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
    </stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

/* import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState,useEffect} from "react";
import { firebase } from "./Config";

import signIn from "./src/SignIn";
import SignUp from "./src/Signup";
import Dashboard from "./src/Dashboard";
import Header from "./Component/Header";

const stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user,setUser] =useState();
  
  // Handle user state changes
  function onAuthStateChanged(user){
    setUser(user);  
    if (initializing) setInitializing(false);
  } 
   
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);

  if (initializing) return null;

  if (!user){
    return (
      <stack.Navigator>
        <Stack.Screen 
        name="login"
        component={signIn}
        options={{   
          headerTitle: () => <Header name="bug mq" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50,
            borderBottomrightRadius:50,
            BackgroundColor:'#00e4d0',
            shadowcolor: '#000',
            elevation:25

          }
        }} 

        />
        <Stack.Screen 
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: () => <Header name="bug mq" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50,
            borderBottomrightRadius:50,
            BackgroundColor:'#00e4d0',
            shadowcolor: '#000',
            elevation:25

          }
        }} 
        />
      </stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
    <Stack.Screen
    name="Dashboard"
    component={Dashboard}
    options={{
      headerTitle: () => <Header name="bug qm" />,
      headerStyle: {
        height:150,
        borderBottomLeftRadius:50,
        borderBottomrightRadius:50,
        BackgroundColor:'#00e4d0',
        shadowcolor: '#000',
        elevation:25

      }
    }} 
    /> 
    </Stack.Navigator>  
  )
}
 export default () => {
  return (
    <NavigationContainer>
      <App></App>
    </NavigationContainer>
  )
 }*/