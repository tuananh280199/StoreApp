import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

// import SkiiImage from '../assets/skii.png'

export default function CategoryListItem(props){
    return <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.categoryImage} source={props.image}/>
    </View>
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 16,
        borderRadius: 5,
        backgroundColor : '#FFF',
        shadowColor: '#30C1DD',
        shadowOpacity : 0.3,
        shadowRadius : 10,
        shadowOffset : {width : 0, height : 0},
        elevation: 10,
        marginBottom : 16 
    },
    categoryImage : {
        width : 64,
        height : 64
    },
    title : {
        textTransform : 'uppercase',
        marginBottom : 8,
        fontWeight: '700'
    }
});