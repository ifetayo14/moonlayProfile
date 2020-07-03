import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import deviceStorage from '../services/deviceStorage';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addLoading } from '../actions/DataActions';
import { deleteToken } from '../actions/JwtActions';
import { Card } from 'react-native-elements'
import Person from '../../image/person.svg'
import ProfileEdit from '../../image/profile-edit.svg'
import axios from 'axios';
import moment from 'moment';
import {Url_Clockin} from '../config/URL'
import Icon from 'react-native-vector-icons/AntDesign';

class PersonalData extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }

        AsyncStorage.getItem('photoprofile').then(response => {
            this.setState({
                loadingPhoto: true,
                photoUri: response
            });
        });

        
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView
                    alwaysBounceVertical={true}
                    refreshControl={
                    <RefreshControl refreshing={this.state.refreshing}
                    // onRefresh={this.loadData}
                    />
                    }>

                        <View style={styles.view1}>
                            <Card containerStyle={styles.card}>
                                <View style={{flexDirection:'column'}}>
                                    <View style={{flex:3}}>
                                        <View style={styles.viewPhoto}>
                                            <View style={{display:'flex'}}>
                                                <View>
                                                    <Person width={70} height={70}/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Full Name</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="Stella Veronica Vyolina"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Email</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="Stella@gmail.com"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Date of Birth</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="01-01-2000"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Gender</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="Female"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Religion</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="Christian"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Phone Number</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="0821 3213 7891"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Personal Email</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        placeholder="personal@gmail.com"
                                        placeholderTextColor="#000" />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F9FCFF',
      marginBottom: 20,
    },
    textInputContainer: {
        fontSize: 18,
        flex: 1,
        paddingRight: 10,
        paddingLeft: 15,
        borderColor: 'grey',
        borderWidth: 1,
        height: 45,
        borderRadius: 20,
        color: "#000",
    },
    view1:{
      flex:1
    },
    card:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3, borderRadius:15,
    },
    card1: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3, borderRadius: 15,
    },
    viewPhoto:{
      backgroundColor:'#d4d4d4', width:100, height:100, alignSelf:'center', borderRadius:100/2, justifyContent:'center', alignItems:'center', marginTop:5 
    },
    dcard: {
      flex:1, borderWidth:1, borderColor:'#C1C1C1', borderRadius:7, flexWrap:'nowrap'
    },
    cardHistory: {
      padding: 0,
      borderRadius: 1,
      width:'93%',
      alignSelf:'center',
      marginTop:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      backgroundColor:'#FFFFFF',
      elevation: 0.5, 
      height:250, 
    },
   text9:{
    fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#505050', marginTop: 10,
  },
  })

  const mapStateToPropsData = (state) => {
    return {
      loading : state.DataReducer.loading,
      tokenJWT: state.JwtReducer.jwt,
    }
  }
  const mapDispatchToPropsData = (dispatch) => {
    return {
      addLoad : (Loading) => dispatch(addLoading(Loading)),
      delete: () => dispatch(deleteToken())
    }
  }
    
  export default connect(mapStateToPropsData, mapDispatchToPropsData) (PersonalData)