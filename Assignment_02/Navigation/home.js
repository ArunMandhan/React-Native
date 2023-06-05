import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  const Home = props => {
    const _logoff = () => {
      props.navigation.replace('Login');
    };
    return (
      <View style={styles.container}>
        <Text style={styles.txtColor}>{'This is HomePage page.'}</Text>
        <TouchableOpacity onPress={() => _logoff()} style={styles.button}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#2e7d32',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    txtColor: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      paddingBottom:20,
    },
  });