import React from "react";
import { Platform, StyleSheet,TouchableOpacity , Text, View, StatusBar,Button, Alert } from 'react-native';

class Barang extends React.Component {


  constructor(){
    super();
    this.state={
      jumlah: 0
    }
  }
  
  handleTambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    })
  }

  handleKurang = () => {
    if(this.state.jumlah > 0){
        this.setState({
            jumlah: this.state.jumlah - 1
        })
    }else{
    alert("Jumlah tidak boleh kurang dari 0");
    }
  }
	
	render(){
	return (
		<View>
        <Text style={styles.textJumlah}>Jumlah : {this.state.jumlah}</Text>
        <Text style={styles.textCaption}>Silahkan Tekan Tombol Di Bawah</Text>
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonTambah} onPress={this.handleTambah}>
			<Text style={styles.textTambah}>
				 +
			</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.buttonKurang} onPress={this.handleKurang}>
			<Text style={styles.textKurang}>
				- 
			</Text>
		</TouchableOpacity>
        </View>
        <Text style={styles.textTotal}>
            {this.state.jumlah}
        </Text>
		
		</View>
	)
	}


}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTambah: {
        backgroundColor: "green",
        marginLeft: 40,
        marginRight: 20,
        marginTop: 30,
        marginBottom: 50,
        flex: 1
    },
    buttonKurang: {
        backgroundColor: "red",
        marginRight: 40,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 50,
        flex: 1
    },
    textTambah: {
        fontSize: 25,
        textAlign: "center",
        color: "#ffffff",
    },
    textKurang: {
        fontSize: 25,
        textAlign: "center",
        color: "#ffffff"
    },
    textJumlah: {
        textAlign: "right",
        marginRight: 10,
        marginBottom: 20
    },
    textCaption: {
        textAlign: "center", 
        fontSize: 20
    },
    textTotal: {
        textAlign: "center",
        fontSize: 50,
        color: "blue"
    }
})
export default Barang;