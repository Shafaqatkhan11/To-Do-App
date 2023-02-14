import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
//we create a function Task and pass it on props test..
const Task=(props)=>{
    return(
        //item is a container.
        <View style ={styles.item}>
            {/* item left and item square are child item container */}
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                </View>
                
                <Text style={styles.itemText}>{props.test}</Text>
            </View>
            <View style={styles.circular}>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create(
    {
     item: {
        backgroundColor:"#fff",
        width:300,
     padding: 15,
     borderRadius:10,
     flexDirection:"row",
     alignItems: "center",
     justifyContent:"space-between",
     marginBottom:20,
     marginTop:40
    },
     itemLeft:{
        flexDirection :"row",
        alignItems:"center",
        flexWrap:"wrap",
     },
     square:{
        width :24,
        height:24,
        backgroundColor:"#558CF6",
        opacity:0.55,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:"80%",
    },
     circular:{
        width:12,
        height:12,
      borderColor :"#558cfc",
      borderWidth:2,
      borderRadius:6,

     },
    },
)
export  default Task;
