import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SplashScreens from "../screens/SplashScreens";
import WorkHome from "../screens/WorkHome";
import OverworkForm from "../screens/OverworkForm";
import WorkClient from "../screens/WorkClient";
import Dayoff from "../screens/DayOff"
import Meetings from "../screens/Meetings"
import TaskDone from "../screens/TaskDone"
import Sick from "../screens/Sick"
import Approval from '../screens/ApprovalPage'
import ClockInHistory from '../screens/ClockInHistory'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomNavBar from './BottomNavBar'
import BottomNavBarHD from './BottomNavBarHD'
import Eworkplace3 from '../../image/eworkplace3.svg'
import EditProfile from '../screens/EditProfile';
import ListProfile from '../screens/ListProfile';
import PersonalData from '../screens/PersonalData';
import WorkingExperience from '../screens/WorkingExperience';
import AddWorkingExperience from '../screens/AddWorkingExperience';
import DetailWorkingExperience from '../screens/DetailWorkingExperience';
import InformalEducation from '../screens/InformalEducation';
import DetailInformalEducational from '../screens/DetailInformalEducational';
import Payslip from '../screens/Payslip';
import FamilyData from '../screens/FamilyData';
import DetailFamilyData from '../screens/DetailFamilyData';
import EditFamilyData from '../screens/EditFamilyData';
import EditFamilyDataForm from '../screens/EditFamilyDataForm';
import EmergencyContact from '../screens/EmergencyContact';
import DetailEmergencyContact from '../screens/DetailEmergencyContact';
import EditEmergencyContact from '../screens/EditEmergencyContact';
import EditEmergencyContactForm from '../screens/EditEmergencyContactForm';
import ListProfileDetail from '../screens/ListProfileDetail';
import InformalEducationDetail from '../screens/InformalEducationDetail';
import FormalExperienceDetail from '../screens/FormalExperienceDetail';
import EditFormalExperience from '../screens/EditFormalExperience';
import AddInformalEducation from '../screens/AddInformalEducation';
import EditInformalEducation from '../screens/EditInformalEducation';
import EditPersonalData from '../screens/EditPersonalData';

const Stack = createStackNavigator();
function HeaderRight () {
  return(
    <View style={{alignSelf: 'flex-end', paddingRight: 20}}>
    <Button
      icon={<FontAwesome5
        name="bell"
        size={25}
        color="white"
        solid
      />}
      buttonStyle={{backgroundColor:'#1A446D'}}
      onPress={()=>{alert('Under Development!')}}  
    />
      
    </View>
  )
}

function HeaderLeft () {
  return(
    <View style={{marginLeft:15}}>
      <Eworkplace3 width={120} height={45}/> 
    </View>
  )
}

function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerTintColor:'#FFFFFF',
        headerStyle:{backgroundColor: '#1A446D'},
        safeAreaInsets: { top: 5 },
        headerTitleAlign:'center',
        headerTitleStyle:{fontFamily:'Nunito-SemiBold'}
      }}
      
      initialRouteName='SplashScreen'
    >
      <Stack.Screen name="SplashScreen" component={SplashScreens} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={BottomNavBar} 
      options={{
        headerRight:()=>{
          return(
            <HeaderRight />
          )
        },
        headerLeft:()=>{
          return(
            <HeaderLeft />
          )
        },
        headerTitle:null,  
        }}
      />
      <Stack.Screen name="HomeHD" component={BottomNavBarHD} 
      options={{
        headerRight:()=>{
          return(
            <HeaderRight />
          )
        },
        headerLeft:()=>{
          return(
            <HeaderLeft />
          )
        },
        headerTitle:null,
        }}
      />
      <Stack.Screen name="WHome" component={WorkHome} options={{headerTitle:'Work From Home', }}/>
      <Stack.Screen name="WClient" component={WorkClient} options={{headerTitle:'Work at Client Office',}}/>  
      <Stack.Screen name="DayOff" component={Dayoff} options={{headerTitle:'Day Off',}}/>  
      <Stack.Screen name="Sick" component={Sick} options={{headerTitle:'Sick',}}/>
      <Stack.Screen name="Approval" component={Approval} options={{headerTitle:'Approval',}}/>
      <Stack.Screen name="ClockinHistory" component={ClockInHistory} options={{headerTitle:'Clock In History'}}/>  
      <Stack.Screen name="OverworkForm" component={OverworkForm} options={{headerTitle:'Overwork Form'}}/> 
      <Stack.Screen name="Meetings" component={Meetings} options={{headerTitle:'Meetings',}}/>
      <Stack.Screen name="TaskDone" component={TaskDone} options={{headerTitle:'Task Done',}}/>  
      <Stack.Screen name="ListProfile" component={ListProfile} options={{ headerTitle: 'Edit Profile', }} />  
      <Stack.Screen name="WorkingExperience" component={WorkingExperience} options={{ headerTitle: 'Working Experience', }} />  
      <Stack.Screen name="AddWorkingExperience" component={AddWorkingExperience} options={{ headerTitle: 'Add Working Experience', }} />
      <Stack.Screen name="DetailWorkingExperience" component={DetailWorkingExperience} options={{ headerTitle: 'Detail Formal Experience', }} />  
      <Stack.Screen name="InformalEducation" component={InformalEducation} options={{ headerTitle: 'Informal Education History', }} />
      <Stack.Screen name="AddInformalEducation" component={AddInformalEducation} options={{ headerTitle: 'Add Informal Education History', }} />
      <Stack.Screen name="EditInformalEducation" component={EditInformalEducation} options={{ headerTitle: 'Edit Informal Education History', }} />
      <Stack.Screen name="InformalEducationDetail" component={InformalEducationDetail} options={{ headerTitle: 'Details Informal Education History', }} />  
      <Stack.Screen name="ListProfileDetail" component={ListProfileDetail} options={{ headerTitle: 'Detail Profile', }} />  
      <Stack.Screen name="DetailInformalEducation" component={DetailInformalEducational} options={{ headerTitle: 'Detail Informal Education History', }} />
      <Stack.Screen name="FormalExperience" component={FormalExperienceDetail} options={{ headerTitle: 'Detail Formal Experience', }} />
      <Stack.Screen name="EditFormalExperience" component={EditFormalExperience} options={{ headerTitle: 'Edit Formal Experience', }} />
      <Stack.Screen name="PersonalData" component={PersonalData} options={{ headerTitle: 'Personal Data', }} />
      <Stack.Screen name="Payslip" component={Payslip} options={{ headerTitle: 'Payslip', }} />
      <Stack.Screen name="FamilyData" component={FamilyData} options={{ headerTitle: 'Family Data', }} />
      <Stack.Screen name="DetailFamilyData" component={DetailFamilyData} options={{ headerTitle: 'Detail Family Data', }} />
      <Stack.Screen name="EditFamilyData" component={EditFamilyData} options={{ headerTitle: 'Family Data', }} />
      <Stack.Screen name="EditFamilyDataForm" component={EditFamilyDataForm} options={{ headerTitle: 'Edit Family Data', }} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} options={{ headerTitle: 'Emergency Contact', }} />
      <Stack.Screen name="EditEmergencyContact" component={EditEmergencyContact} options={{ headerTitle: 'Emergency Contact', }} />
      <Stack.Screen name="EditEmergencyContactForm" component={EditEmergencyContactForm} options={{ headerTitle: 'Edit Emergency Contact', }} />
      <Stack.Screen name="DetailEmergencyContact" component={DetailEmergencyContact} options={{ headerTitle: 'Detail Emergency Contact', }} />
      <Stack.Screen name="EditPersonalData" component={EditPersonalData} options={{ headerTitle: 'Edit Personal Data', }} />

    </Stack.Navigator>
  );
}
export default (MyStack)