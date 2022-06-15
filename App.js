import React, { useState } from "react";
import { View,Text , StyleSheet , TouchableOpacity , TextInput, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import ToDoCard from './src/components/ToDoCard'



function App(){

  const [task , setTask] = useState();
  const [taskList , setTaskList] = useState([]);

  const getTask = () =>{
    if(task == '' || task==null) return alert("task girilmedi")
    setTaskList([...taskList , task])
    setTask(null)
  }

  const addTask = (index) =>{
      Keyboard.dismiss()
      let yedekDizi = [...taskList]
      yedekDizi.splice(index , 1)
      setTaskList(yedekDizi)
  }

  return(

    <View style={styles.main_container}>

      <View style={styles.header_container}>
        <Text style={styles.header_text}>YAPILACAKLAR</Text>
        <Text style={styles.header_text}> {taskList.length} </Text>
      </View>

      <View style={styles.section_items}>

        {
          taskList.map((item , index) => {
            return(
              <TouchableOpacity
                key={item}
                
                onLongPress={ () => addTask(index) }
              >
                <ToDoCard text={item} />
              </TouchableOpacity>
            )
          })
        }


      </View>

      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard_container}
      >
        <TextInput 
          style={styles.input}
          placeholder='Görevini yazmak için tıkla...'
          placeholderTextColor={'white'}
          value={task}
          onChangeText={ text => setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={ () => getTask() } >

        <View style={styles.save_container}>
          <Text style={styles.save_text}>Kaydet</Text>
        </View>

        </TouchableOpacity>

      </KeyboardAvoidingView>

      </View>

  )

}


const styles = StyleSheet.create({
  main_container:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:'black'
  },

  header_container:{
    flexDirection:'row',
    margin:10,
    padding:10,
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:30
  },

  header_text:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold'
  },

  keyboard_container:{
    flexDirection:'column',
    backgroundColor:'gray',
    borderRadius:10
  },

  input:{
    color:'white',
    textAlign:'center'

  },

  save_container:{
    backgroundColor:'#ddd',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    margin:8,
    padding:5
  },

  save_text:{
    color:'black',
    fontSize:25,

  },

  section_items:{
    flex:1,
    marginTop:20,
    marginBottom:20,
  }




})



export default App