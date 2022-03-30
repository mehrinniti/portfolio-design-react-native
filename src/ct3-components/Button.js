import { View, Button as WebButton } from 'react-native-web';

const Button = () => {
    return (
        <View>
            <WebButton
                style={{ backgroundColor: 'yellow', width: '100px', fontSize: '25px', color: 'green' }}

                title='Submit'
            />
        </View>
    );
};



// const styles = StyleSheet.create({
//     btn: {
//         backgroundColor: '#888',
//         color: 'black'
//     },
// });



export default Button;


