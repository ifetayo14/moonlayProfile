import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,CheckBox, Picker, ScrollView, TouchableOpacity, RefreshControl, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
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
import { Url_Clockin } from '../config/URL'
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';

class EditInformalEducational extends Component {
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
        this.date = this.date.bind(this);

    }




    ChoosePhotoProfile() {
        this.props.navigation.navigate('EditProfile')
    }
    date() {
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
                                    <Icon1 name="cast-education" size={50}  />
                                </View>
                                <Text style={styles.textSM}>
                                    Held By
                                </Text>
                                <TextInput
                                    multiline={true}
                                    maxLength={200}
                                    placeholder=""

                                    style={styles.inputText}
                                    >
                                </TextInput>
                                <Text style={styles.textSM}>
                                    Start Date
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        multiline={true}
                                        maxLength={200}
                                        placeholder=""
                                        style={styles.inputText}
                                    >
                                    </TextInput>
                                    <View style={{ marginLeft: '-15%', alignSelf: 'center' }}>
                                        <TouchableOpacity >
                                            <Icon2 name="calendar" size={40} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.textSM}>
                                    End Date
                                </Text>

                                <View style={{flexDirection:'row'}}>
                                <TextInput
                                    multiline={true}
                                    maxLength={200}
                                    placeholder=""
                                    style={styles.inputText}
                                >
                                </TextInput>
                                    <View style={{ marginLeft: '-15%', alignSelf: 'center' }}>
                                        <TouchableOpacity>
                                    <Icon2 name="calendar" size={40} />
                                </TouchableOpacity>
                                </View>
                                </View>
                                <Text style={styles.textSM}>
                                    Description
                                </Text>

                                <TextInput
                                    multiline={true}
                                    maxLength={200}
                                    style={styles.inputTextDesc}
                                >
                                </TextInput>
                            </View>
                            <View style={{flexDirection:'row', marginTop:20}}>
                                <CheckBox
                                    center
                                    checked={this.state.checked}
                                />
                                <Text style={styles.text8}>Certificate</Text>
                                <TouchableOpacity>
                                <Button style={{backgroundColor:'blue', marginLeft:10, borderRadius:15}}><Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Attach File</Text></Button>
                                </TouchableOpacity>
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
    btnRemove: {
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginTop: 40,
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
        textAlignVertical: 'top', borderWidth: 1, borderRadius: 20, width: '100%', height: 50, backgroundColor: 'white', fontSize: 18, borderColor: '#505050',  paddingLeft: 10, paddingRight: 10
    },
    inputTextDesc: {
        textAlignVertical: 'top', borderWidth: 1, borderRadius: 20, width: '100%', height: 100, backgroundColor: 'white', fontSize: 18, borderColor: '#505050', paddingLeft: 10, paddingRight: 10
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
    text3: {
        textAlign: 'center', fontSize: 15, fontFamily: 'Nunito-Light', fontWeight: '300', color: '#505050',
    },
    text4: {
        fontSize: 16, fontFamily: 'Nunito-Bold', fontWeight: '600', color: '#505050',
    },
    text5: {
        fontSize: 38, fontFamily: 'Nunito-Bold', fontWeight: '600', color: '#505050', marginTop: '5%'
    },
    text6: {
        fontSize: 12, color: '#505050', justifyContent: 'center', paddingLeft: '5%', paddingTop: '15%', fontFamily: 'Nunito-Light', fontWeight: '300',
    },
    text7: {
        paddingLeft: '5%', paddingTop: '35%', fontSize: 12, color: '#505050', fontFamily: 'Nunito', fontWeight: '300',
    },
    text8: {
        fontFamily: 'Nunito-SemiBold', fontSize: 20, fontWeight: '600', color: '#505050', marginLeft: 15
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
    }
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

export default connect(mapStateToPropsData, mapDispatchToPropsData)(EditInformalEducational)