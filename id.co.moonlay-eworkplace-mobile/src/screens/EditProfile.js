import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, BackHandler, TouchableOpacity, Picker, TextInput, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Person from '../../image/person.svg'
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DayOff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fullname: '',
            startDate: new Date(),
            dateStart: '',
            endDate: new Date(),
            dateEnd: '',
            CheckInTime: '',
            CheckOutTime: '',
            photo: null,
            Location: '',
            message: '',
            status: 'Taking day off',
            headDivision: '',
            reason: '',
            substitute: '',
            show1: false,
            show2: false,
            backPressed: 0,
        }
        
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBack);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBack);
    }

    onBack = () => {
        this.setState({
            backPressed: this.state.backPressed + 1
        })

        if (this.state.backPressed % 2 === 1) {
            this.props.navigation.goBack();
            return true;
        }
    };

    loadData = async () => {
        const username = await AsyncStorage.getItem('username');
        const name = await AsyncStorage.getItem('name');
        const location = await AsyncStorage.getItem('location');
        this.setState({
            username: username,
            name: name,
            Location: location
        })
    };

    

    showDatepicker1 = () => {
        this.setState({
            show1: true
        })
    };
    showDatepicker2 = () => {
        this.setState({
            show2: true
        })
    };
    render() {
        const { show1, show2 } = this.state
        return (
            <SafeAreaView >
                <ScrollView>
                    
                    <View style={styles.viewPhoto}>
                          <View style={{display:'flex'}}>
                            <View>
                              <Person width={70} height={70}/>
                            </View>
                          </View>
                        </View>
                    <Text style={styles.textSM}>
                        Full Name
                </Text>

                    
                <TextInput
                    multiline={true}
                    maxLength={200}
                    placeholder=""
                    style={styles.inputText}
                    onChangeText={text => this.setState({ message: text })}
                    value={this.state.message}>
                </TextInput>
                    
                
                    <Text style={styles.textSM}>
                        E-mail
                </Text>


                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text style={styles.textSM}>
                        Religion
                </Text>

                    <View style={styles.viewPicker}>
                        <Picker
                            mode={"dropdown"}
                            selectedValue={this.state.headDivision}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ headDivision: itemValue })
                            }>
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Kristen" value="Kristen" />
                            <Picker.Item label="Islam" value="Islam" />
                            <Picker.Item label="Budha" value="Budha" />
                            <Picker.Item label="Hindu" value="Hindu" />
                        </Picker>
                    </View>


                    
                    <Text
                        style={styles.textSM}>
                        Skill Set
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text
                        style={styles.textSM}>
                        Family Data
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text
                        style={styles.textSM}>
                        Emergency Contact
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text
                        style={styles.textSM}>
                        Education History
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text
                        style={styles.textSM}>
                        Information Education History
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>

                    <Text
                        style={styles.textSM}>
                        Working Experience
                </Text>
                    <TextInput
                        multiline={true}
                        maxLength={200}
                        placeholder=""
                        style={styles.inputText}
                        onChangeText={text => this.setState({ message: text })}
                        value={this.state.message}>
                    </TextInput>
                    


                    

                    <TouchableOpacity onPress={() => alert('Under Development!')} style={styles.buttonSubmit}>
                        <Text style={styles.textbtnSubmit} >Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#F9FCFF',
        height: '100%'
    },
    viewPhoto: {
        backgroundColor: '#d4d4d4', width: 100, height: 100, alignSelf: 'center', borderRadius: 100 / 2, justifyContent: 'center', alignItems: 'center', marginTop: 5
    },
    textareaContainer: { fontSize: 20, marginLeft: 21, fontWeight: '600', fontFamily: 'Nunito-SemiBold', color: '#505050', paddingTop: 10 },
    textSM: {
        marginTop: 16,
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: '300', fontFamily: 'Nunito-Light'
    },
    text1: {
        fontSize: 16, fontWeight: '300', fontFamily: 'Nunito', marginLeft: 22, marginTop: 10
    },
    TextDate: {
        fontWeight: '300', fontFamily: 'Nunito-Light', marginLeft: 22, marginBottom: 3
    },
    viewPicker: {
        width: '90%', flex: 1.5, borderRadius: 5, borderColor: '#505050', borderWidth: 1, backgroundColor: 'white', alignSelf: 'center'
    },
    picker: {
        height: '100%', width: '100%', borderWidth: 20, borderColor: '#505050'
    },
    Split: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 16,
    },
    inputText: {
        textAlignVertical: 'top', borderWidth: 1, borderRadius: 5, width: '90%', height: '5%', backgroundColor: 'white', fontSize: 18, borderColor: '#505050', alignSelf: 'center', paddingLeft: 10, paddingRight: 10
    },
    buttonSubmit: {
        marginTop: 40, backgroundColor: '#1A446D', height: 50, width: '90%', borderRadius: 5, alignSelf: 'center'
    },
    textbtnSubmit: {
        color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center', textAlignVertical: "center", flex: 1, fontFamily: 'Nunito-SemiBold', marginBottom: 7
    },
    viewDate1: {
        flex: 1,
    },
    viewDate2: {
        flexDirection: 'row', flex: 1, marginLeft: 22, width: '80%',
    },
    viewDate22: {
        flexDirection: 'row', flex: 1, marginLeft: 18, width: '80%',
    },
    viewDate3: {
        height: '100%', width: '100%', borderColor: '#505050', borderWidth: 1, borderRadius: 5, flexDirection: 'row', backgroundColor: '#FFFFFF'
    },
    textinputDate: {
        height: '100%', borderWidth: 1, backgroundColor: 'white', borderRadius: 5, fontSize: 18
    },
    iconDate: {
        alignSelf: 'flex-end', marginRight: 7, marginBottom: 10, marginTop: 8
    }
});
