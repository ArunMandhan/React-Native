import React ,{useState} from 'react';
import { Text,View,TextInput,Button,StyleSheet, TouchableOpacity } from 'react-native';


const SignUp  = () => {
    const [username, setusername] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [gender, setGender] = useState('');
    const [contact,setContact] = useState('');

    const handleSignUp = () => 
    {
    

    };

    return(
        <View style={styles.container}>
           <View style={styles.title}>
            <Text style={styles.lbl}>SignUp Form</Text>
           </View>
            <TextInput 
            placeholder='Username' 
            style={styles.input}
            onChangeText={text=> setusername(text)}
            value={username}
            ></TextInput>

            <TextInput 
            style={styles.input}
            placeholder='Email'
            onChangeText={text => setEmail(text)}
            value={email} 
            />

            <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={text=> setPassword(text)}
            value={password}
            />

            <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            onChangeText={text=> setConfirmPass(text)}
            value={confirmPass}
            />

            <TextInput
            style={styles.input}
            placeholder='Gender'
            onChangeText={text => setGender(text)}
            value={gender}
            />

            <TextInput
            style={styles.input}
            placeholder='Contact'
            onChange={text=> setContact(text)}
            value={contact}
            />

            <TouchableOpacity onPress={() => handleSignUp()} style={styles.button}>
            <Text style={styles.btn}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
  
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    title:{
        paddingBottom:40,
        alignItems:'center',
        justifyContent:'center',
    },
    lbl:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'blue',
    },
    btn: {
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
});

export default SignUp;
