/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

const DashboardScreen = ({users, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
      {/* Header */}
      <View
        style={{
          height: 60,
          backgroundColor: 'blue',
          justifyContent: 'center',
          padding: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'white', fontSize: 20}}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      <View style={{padding: 10}}>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: 'grey',
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            />
          )}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 40}}>{item.id}</Text>
              </View>
              <View>
                <Text style={{fontStyle: 'italic', color: 'red'}}>
                  {item.name}
                </Text>
                <Text>Age - {item.age}</Text>
                <Text>Gender - {item.gender}</Text>
                <Text>Email - {item.email}</Text>
                <Text>Phone - {item.phoneNo}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(DashboardScreen);
