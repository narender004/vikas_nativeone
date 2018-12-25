import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'redux';
 

class getuser extends Component {
    state = {
        loading: true,
        data: []
    }  
    render() {
        const { loading } = this.state
        if (loading) {
            return (
                <View style={styles.center}>
                    <ActivityIndicator size="large" animating={true} />
                </View>
            )
        }
        return (
            <View>
                <ScrollView>
                    {       <Provider store = { store }></Provider>
                            <View style={styles.item}>
                            <Text>Username : {this.props.username}</Text>
                            <Text>Email    : {this.props.email}</Text>
                            <Text>Contact  : {this.props.contact}</Text>
                            </View>
                        
                    }
                </ScrollView>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        username: state.username,
        email: state.email,
        contact: state.contact
    }
}
export default connect(mapStateToProps)( getuser)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})