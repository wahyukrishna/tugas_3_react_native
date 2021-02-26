import React from "react";
import {Text,View,StyleSheet} from "react-native";

class Header extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textTugas}>
                    Tugas 3 React Native
                </Text>
                <Text style={styles.textWelcome}>
                    {this.props.data}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "olive",
        paddingBottom: 30
    },
    textTugas: {
        color: "white",
        textAlign: "center",
        marginTop: 20
    },
    textWelcome: {
        color: "purple",
        textAlign: "center",
        fontSize: 25
    }
})

export default Header;