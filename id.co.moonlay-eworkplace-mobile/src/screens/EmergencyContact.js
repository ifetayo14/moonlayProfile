import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { addLoading } from '../actions/DataActions';
import { deleteToken } from '../actions/JwtActions';
import { Card } from 'react-native-elements'

class EmergencyContact extends Component {
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
        this.moveToAdd = this.moveToAdd.bind(this);
        this.moveToDetail = this.moveToDetail.bind(this);

    }

    moveToAdd() {
        this.props.navigation.navigate('AddWorkingExperience')
    }
    moveToDetail() {
        this.props.navigation.navigate('DetailEmergencyContact')
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
                                    <View style={{ flexDirection: 'column'}}>
                                        <View style={{ justifyContent: 'center', alignSelf:'center'}}>
                                            <Icon4 name="contact-phone" size={50}/>
                                        </View>
                                        <TouchableOpacity onPress={this.moveToDetail}>
                                            <Card containerStyle={styles.card1}>
                                                <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={{ fontSize:20}}>Loveleen Sinaga</Text>
                                                        <Text style={{ fontSize:15}}>Grand Mother</Text>
                                                        <Text style={{ fontSize:15}}>0821 1287 6721</Text>
                                                    </View>
                                                </View>
                                            </Card>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Card containerStyle={styles.card1}>
                                                <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={{ fontSize:20}}>Alvin Hutahuruk</Text>
                                                        <Text style={{ fontSize:15}}>Brother</Text>
                                                        <Text style={{ fontSize:15}}>0821 7863 3214</Text>
                                                    </View>
                                                </View>
                                            </Card>
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
        margin:15,
        backgroundColor: '#FFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3, borderRadius: 15,
        padding:10
    },
    container1: {
        
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
    viewPhoto: {
        backgroundColor: '#d4d4d4', width: 100, height: 100, alignSelf: 'center', borderRadius: 100 / 2, justifyContent: 'center', alignItems: 'center', marginTop: 5
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
        backgroundColor: '#FFFFFF',
        elevation: 0.5,
        height: 250,
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

export default connect(mapStateToPropsData, mapDispatchToPropsData)(EmergencyContact)