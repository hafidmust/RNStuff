import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email)
    return (
        <View>
            <Text>Login</Text>
            <TextInput onChangeText={(text)=>setEmail(text)} value={email} style={styles.textInput} placeholder="Email" placeholderTextColor={'black'}/>
            <View style={{margin:12}}></View>
            <TextInput onChangeText={(text)=>setPassword(text)} value={password} style={styles.textInput} placeholder="Password" placeholderTextColor={'black'}  />
            <View style={styles.buttonLogin}>
                <Button title="Login" onPress={()=>{
                    if(email == "admin" && password == "123"){
                        navigation.navigate('Home')
                    }else{
                        console.log('salah username / password')
                    }
                }}>Login</Button>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 16,
        color: 'black'
    },
    buttonLogin: {
        marginHorizontal: 16,
        marginTop: 8
    }
})
export default Login;