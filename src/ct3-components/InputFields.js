
import { View } from 'react-native';
import { TextInput } from 'react-native-web'

const InputFields = () => {
    return (
        <View>
            <View>
                <h3>Name: </h3>
                <TextInput
                    placeholder="Your name"
                    style={{
                        // backgroundColor: "rgb(200, 232, 243)",
                        backgroundColor: "#00ed9648",
                        width: 300,
                        height: 35,
                        fontSize: 18,
                        padding: 10,
                        borderRadius: 5,
                        marginTop: -10,
                        outline: "none"
                    }}
                />
            </View>
            <View>
                <h3>ID: </h3>
                <TextInput
                    placeholder="Your id"
                    style={{
                        backgroundColor: "#00ed9648",
                        width: 300,
                        height: 35,
                        fontSize: 18,
                        padding: 10,
                        borderRadius: 5,
                        marginTop: -10,
                        marginBottom: 30,
                        outline: "none"
                    }}
                />
            </View>
        </View>
    );
};

export default InputFields;