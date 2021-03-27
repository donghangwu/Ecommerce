import React from 'react'
import { View ,StyleSheet,Image} from 'react-native'
import AppText from '../components/AppText'
import UserItem from '../components/UserItem'
export default function DetailsScreen() {
    return (
        <View>
            <Image style={styles.image}
            source={require('../assets/aa.png')}/>
            <View style={styles.textStyle}>
                <AppText style={styles.titleStyle}>
                Hat for sale</AppText>
                <AppText style={styles.price} >
                $100
                </AppText>
            </View>
            <UserItem 
                style={styles.useritem}
                image={require('../assets/maleAvatar.jpg')}
                title="David"
                subtitle="5 Listings"/>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    textStyle:{
        padding:15,

    },
    titleStyle:{
        fontSize:25,
        marginBottom:10,
        fontWeight:'500'
    },
    price:{
        color:'#99CC66',
        fontWeight:'bold'
    },
    useritem:{
        marginTop:-10,
        marginLeft:-5
    }

})