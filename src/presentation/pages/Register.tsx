import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <TextInput 
                    placeholder="Username"
                />
                <TextInput 
                    placeholder="Email"
                />
                <TextInput 
                    placeholder="Password"
                />
                <Button title="Submit" onPress={() => {

                }}/>
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