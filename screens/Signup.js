import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        contact: '',
    }
    _onChange = (value) => {
        this.setState({
            value
        })
    }

    registraion = () => {  
        const bodyObj = {
            "username": this.state.username,
            "email":    this.state.email,
            "password": this.state.password,
            "contact":  this.state.contact
        }   
        fetch('http://192.168.1.5/api/users/create.php', {
                method: 'POST',
             body: JSON.stringify(bodyObj)
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    alert("Signup Successfully !")
                })
                .catch((error) => {
                    console.error(error);
                });
        
    }
  
     render() {
        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../img/LOGO.png')}
                />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Username"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    onChangeText={(username) => this.setState({ username })} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}/>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}/>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Re-Type Password"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                   />    


                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Phone"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    onChangeText={(contact) => this.setState({ contact })} />      

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.registraion}>
                    <Text style={styles.submitButtonText}> Signup </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
        )
    }
}
export default Signup

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#079992',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#079992',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        alignSelf: 'center',
    },

})