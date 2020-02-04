/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

const LoginScreen = ({credentials, navigation}) => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const onSubmit = () => {
    if (
      username === credentials[0].username &&
      password === credentials[0].password
    ) {
      navigation.navigate('DashboardScreen');
    } else {
      alert('Incorrect Username/Password');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'skyblue', padding: 30}}>
      <Text style={{fontSize: 30, marginBottom: 20, marginTop: 40}}>Login</Text>
      <TextInput
        placeholder="Username"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Password"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="submit" onPress={onSubmit} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
  };
};

export default connect(mapStateToProps)(LoginScreen);
