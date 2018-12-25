import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

 
class ScrollViewExample extends Component {
    state = {
            places: []
    }
    render() {
      
        return (
            <View>
                <ScrollView>
                    {   
                        this.props.places.map((item, i) => (
                            <View key={i} style={styles.item}>                              
                                <Text>Username : {item.value.username}</Text>                                
                                <Text>Email    : {item.value.email}</Text>
                                <Text>Contact  : {item.value.contact}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )  
        }
    }
 
const mapStateToProps = state => {
    console.log(state.data.userData);
    return {
        places: state.data.userData
    }
}
export default connect(mapStateToProps,null)(ScrollViewExample)

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