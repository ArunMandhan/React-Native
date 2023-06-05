import React, {useState} from 'react';

import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const _login = () => {
    
    if (userName != '' && password != '') {
        if(userName != 'admin' && password != 'admin')
        {
          setErrorMessage('Incorrect Username or Password');
        }else
        {
          props.navigation.replace('Home');
        }
    } else
    {
      setErrorMessage('Username and password fields cannot be empty!!');
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Welcome To DSU</Text>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter User Name"
        placeholderTextColor={'black'}
        value={userName}
        onChangeText={value => setUserName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor={'black'}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
      
      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <TouchableOpacity onPress={() => _login()} style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  login: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight:'bold',
    paddingBottom:20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});
