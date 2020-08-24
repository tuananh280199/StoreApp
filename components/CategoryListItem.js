import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

// import SkiiImage from '../assets/skii.png'

export default function CategoryListItem(props){
    const { category } = props;
    return <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={category.image}/>
    </View>
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 16,
        borderRadius: 4,
        backgroundColor : '#FFF',
        shadowColor: '#000',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 0},
        elevation: 8,
        marginBottom: 16,
        marginLeft: 4,
        marginRight: 4
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