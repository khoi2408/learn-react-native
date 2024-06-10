import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const LoginScreen = () => {
    const loginData = useSelector((state: RootState) => state.login.data)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <TextInput 
                    placeholder="Username"
                />
                <TextInput 
                    placeholder="Password"
                />
                <Button title="Login" onPress={() => {
                    dispatch(login())
                    // navigation.replace('inapp')
                }}/>

                <Text onPress={() => {
                    navigation.navigate('register')
                }}>Register</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#46cdfa',
        flex: 1,
        alignContent: 'center',
        padding: 20,
        justifyContent: 'center',
    }
})