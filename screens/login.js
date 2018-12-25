import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import { connect } from 'react-redux';
import { user_login_data } from '../actions/user_login';
class Login extends Component {
    state = {
        email: '',
        password: '',
        data: [],
    }
    signin = () => {
           fetch('http://192.168.1.5/api/users/read_one.php?' + 'email=' + this.state.email + '&pass=' + this.state.password, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {                
                if (responseJson.username!=null) {
                    this.setState({
                        data: responseJson
                    }); 
                    this.props.add(this.state.data);
                    this.props.navigation.navigate('Scroll');
                } else {
                   alert("Invalid Login");
                }              
                
                this.setState({
                    loading: false,
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });

    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../img/LOGO.png')}
                />
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
                    onChangeText={(password) => this.setState({ password })} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.signin}>
                    <Text style={styles.submitButtonText}> Sign In </Text>
                </TouchableOpacity>
                <Text style={styles.text}>OR</Text>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Signup')} title="Signup">
                    <Text style={styles.submitButtonText}> Signup </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        add: (userdata) => {
            dispatch(user_login_data(userdata))
        }
    }
}
export default connect(null,mapDispatchToProps)( Login)
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
        textAlign:'center',
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