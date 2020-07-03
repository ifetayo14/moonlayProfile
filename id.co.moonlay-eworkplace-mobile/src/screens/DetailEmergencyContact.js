import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Picker, ScrollView, TouchableOpacity, RefreshControl, TextInput, CheckBox } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { addLoading } from '../actions/DataActions';
import { deleteToken } from '../actions/JwtActions';
import Icon4 from 'react-native-vector-icons/MaterialIcons';

class DetailEmergencyContact extends Component {
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




    ChoosePhotoProfile() {
        this.props.navigation.navigate('EditProfile')
    }


    movetoClockinHistory() {
        this.props.navigation.navigate('PaySlip')
    }

    movetoOverworkForm() {
        this.props.navigation.navigate('OverworkForm')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    alwaysBounceVertical={true}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                            onRefresh={this.loadData} />
                    }>

                    <View style={styles.view1}>

                        <View containerStyle={styles.container1}>
                            <View style={{
                                flexDirection: 'column' }}>
                                <View style={{ justifyContent: 'center', alignSelf:'center'}}>
                                    <Icon4 name="contact-phone" size={50}  />
                                </View>
                                <View>
                                    <Text style={styles.text9}>Full Name</Text>
                                    <TextInput
                                    style={styles.textInputContainer}
                                    editable={false}
                                    placeholder="Loveleen Sinaga"
                                    placeholderTextColor="#000" />
                                </View>
                                <View>
                                    <Text style={styles.text9}>Relationship</Text>
                                    <TextInput
                                    style={styles.textInputContainer}
                                    editable={false}
                                    placeholder="Grand Mother"
                                    placeholderTextColor="#000" />
                                </View>
                                <View>
                                    <Text style={styles.text9}>Phone Number</Text>
                                    <TextInput
                                    style={styles.textInputContainer}
                                    editable={false}
                                    placeholder="0821 1287 6721"
                                    placeholderTextColor="#000" />
                                </View>
                                <View style={{alignItems:'center',justifyContent: 'center'}}>
                                    <TouchableOpacity >
                                        <View style={styles.btn}>
                                            <Text style={{color:'white', fontFamily:'Roboto', fontSize:20}}>Remove</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>



                    <Loading visible={this.props.loading === true ? true : false} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: '#FFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3, borderRadius: 15,
        padding: 10
    },
    view1: {
        flex: 1
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3, borderRadius: 15,
    },
    btnSave:{
        backgroundColor:'green',
        width:'30%',
        padding:10,
        alignItems:'center',
        borderRadius:10,
        alignSelf:'flex-end',
        marginTop:40




    },
    viewPicker: {
        width: '90%', flex: 1.5, borderRadius: 5, borderColor: '#505050', borderWidth: 1, backgroundColor: 'white',
    },
    card1: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        width: '100%',
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3, borderRadius: 15,
    },
    viewPhoto: {
        backgroundColor: '#d4d4d4', width: 100, height: 100, alignSelf: 'center', borderRadius: 100 / 2, justifyContent: 'center', alignItems: 'center', marginTop: 5
    },
    inputText: {
        textAlignVertical: 'top', borderWidth: 1, borderRadius: 5, width: '100%', height: 50, backgroundColor: 'white', fontSize: 18, borderColor: '#505050',  paddingLeft: 10, paddingRight: 10
    },
    dcard: {
        flex: 1, borderWidth: 1, borderColor: '#C1C1C1', borderRadius: 7, flexWrap: 'nowrap'
    },
    cardHistory: {
        padding: 0,
        borderRadius: 1,
        width: '93%',
        alignSelf: 'center',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        backgroundColor: '#FFFF',
        elevation: 0.5,
        height: 250,
    },
    textSM: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold', fontFamily: 'Nunito-Light'
    },
    image: {
        width: 100, height: 100, borderRadius: 100 / 2
    },
    textHistory: {
        color: '#505050', fontFamily: 'Nunito-Light', fontSize: 14
    },
    textLogOut: {
        color: 'white', textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-SemiBold', fontWeight: '600',
    },
    Button: {
        backgroundColor: '#1A446D', marginBottom: 20, marginTop: 180, height: 50, justifyContent: 'center'
    },
    text1: {
        textAlign: 'center', fontSize: 15, fontFamily: 'Nunito-Light', fontWeight: '300', color: '#505050', marginTop: 20
    },
    text2: {
        textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-Bold', fontWeight: '600', color: '#505050', marginTop: 5
    },
    textPaySlip: {
        textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-Bold', fontWeight: '600', color: '#505050', marginLeft: 15, marginTop: 5
    },
    Text: {
        fontFamily: 'Nunito-Light', fontSize: 16, fontWeight: '600', color: '#505050', textAlignVertical: 'center'
    },
    textMonth: {
        marginLeft: 15, marginTop: 10, fontSize: 18, fontFamily: 'Nunito-Bold', fontWeight: '600', color: '#265685'
    },
    textVD: {
        textAlign: 'center', textAlignVertical: 'center', fontFamily: 'Nunito-Regular', fontSize: 16, color: '#4A90E2', fontWeight: '600'
    },
    history: {
        height: 40, borderBottomColor: '#505050', borderBottomWidth: 0.5, justifyContent: 'center', flexDirection: 'row', width: '100%'
    },
    textStatus: {
        fontFamily: 'Nunito-SemiBold', fontSize: 20, textAlign: 'center', textAlignVertical: 'center', marginTop: 100, color: '#505050'
    },
    text9:{
     fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#505050', marginTop: 10, marginLeft: 10,
   },
   textInputContainer: {
       fontSize: 18,
       flex: 1,
       paddingRight: 10,
       paddingLeft: 15,
       borderColor: 'grey',
       borderWidth: 1,
       height: 43,
       borderRadius: 15,
       color: "#000",
       marginLeft: 10,
       marginRight: 10,
   },
   addEmergencyContainer:{
       flexDirection: 'row',
       marginTop: 10,
   },
   text11:{
   fontSize: 20, fontFamily:'Nunito-Bold', fontWeight:'600',  color:'#505050',
   },
   btn: {
    width: 350 ,
    height: 45,
    position:'relative',
    borderRadius:15,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems:'center',
    elevation: 1,
    marginTop: 195,
  },
})

const mapStateToPropsData = (state) => {
    return {
        loading: state.DataReducer.loading,
        tokenJWT: state.JwtReducer.jwt,
    }
}
const mapDispatchToPropsData = (dispatch) => {
    return {
        addLoad: (Loading) => dispatch(addLoading(Loading)),
        delete: () => dispatch(deleteToken())
    }
}

export default connect(mapStateToPropsData, mapDispatchToPropsData)(DetailEmergencyContact)