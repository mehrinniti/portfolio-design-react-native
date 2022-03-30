import { View, Image } from "react-native-web"
import userIcon from './../../src/images/usericon-removebg-preview.png'

const UserImage = () => {
    return (
        <View>
            <Image
                source={userIcon}
                style={{ width: 150, height: 150, marginTop: '100px', borderRadius: 100, margin: 'auto', marginTop: '-50px' }}
            />
        </View>
    );
};

export default UserImage;