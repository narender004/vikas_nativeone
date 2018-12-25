import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        fetch('http://192.168.1.5/api/users/read.php', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View>
                <Text>
                   Username : {this.state.data.username}
                </Text>
            </View>
        )
    }
}
export default HttpExample