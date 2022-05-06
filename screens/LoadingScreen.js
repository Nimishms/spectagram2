import React,{Component} from 'react'
import {Text,View,ActivityIndicator} from 'react-native'
import firebase from 'firebase'
export default class LoadingScreen extends Component {
    conponentDidMount(){
        this.checkIfLoggedIn()
    }
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            }else{
                this.props.navigation.navigate('loginScreen')
            }
        })
    }
    render(){
        return(
            <View style = {{flex:1,
                JustifyContent:'center',
            alignItems:'center'}}>
               <AvtivityIndicator size = 'large'/>
            </View>
        )
    }
}