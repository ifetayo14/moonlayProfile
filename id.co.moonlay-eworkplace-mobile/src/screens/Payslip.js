import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { addLoading } from '../actions/DataActions';
import { deleteToken } from '../actions/JwtActions';
import { Card } from 'react-native-elements'

class Payslip extends Component{
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
                                                    <Image
                                                    source={require('../../image/moonlayLogo.jpeg')} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.line} />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Salary Period</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="May 2020"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Employee ID / Employee Name</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="082.ITTech.110111 / Stella Veronica Vyolina"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Department</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value=""
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Job Title</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="Human Resource"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Bank / Bank Account Number</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="Mandiri / 1020007546853"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <Text style={styles.text10}>Payments---</Text>
                                    <View>
                                        <Text style={styles.text9}>Salary</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Backdated Payments</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Allowance</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Incentive</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>Paid Leave</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <Text style={styles.text10}>Deduction---</Text>
                                    <View>
                                        <Text style={styles.text9}>BPJS Kesehatan</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.text9}>BPJS Tenaga Kerja</Text>
                                        <TextInput
                                        style={styles.textInputContainer}
                                        editable={false}
                                        value="IDR $$$"
                                        placeholderTextColor="#000" />
                                    </View>
                                    <View style={styles.takeHomeContainer}>
                                        <Text style={styles.text11}>Take Home Pay : </Text>
                                        <TextInput
                                        style={styles.textInputContainer2}
                                        editable={false}
                                        value="IDR $$$"
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
    },
    textInputContainer: {
        fontSize: 16,
        flex: 1,
        paddingRight: 10,
        paddingLeft: 5,
        borderColor: 'grey',
        borderWidth: 1,
        height: 45,
        borderRadius: 20,
        color: "#000",
    },
    textInputContainer2: {
        fontSize: 18,
        flex: 1,
        paddingRight: 10,
        paddingLeft: 5,
        borderColor: 'grey',
        borderWidth: 1,
        height: 45,
        borderRadius: 20,
        color: "#000",
        width: 50
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
      alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop: 20 
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
    fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#505050', marginTop: 8,
    },
    text10:{
    fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#1A446E', marginTop: 20,
    },
    text11:{
    fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#1A446E',
    },
    takeHomeContainer:{
        flexDirection: 'row',
        marginTop: 25,
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 15,
        marginBottom: 15
    }
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
    
  export default connect(mapStateToPropsData, mapDispatchToPropsData) (Payslip)
