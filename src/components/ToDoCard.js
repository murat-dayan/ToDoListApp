import React from "react";
import { Text, View} from "react-native";
import styles from './ToDoCard.styles'


const ToDoCard = (todos) =>{

    return(

        <View style={styles.container}>

            <Text style={styles.to_do_text}> {todos.text} </Text>

        </View>

    )

}


export default ToDoCard













