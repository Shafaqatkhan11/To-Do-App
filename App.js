import React from 'react'
import  { useState } from 'react';//we import use state from react.
import { Keyboard, TouchableOpacity } from 'react-native'; //import API from react native
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,Platform,Switch} from 'react-native';
import Task from './Components/tasks';//import component..

export default function App() {

    
   const[task,setTask]=useState();// use state hooks.
   const[taskItems,setTaskItems]=useState([]);//another use state and default value a empty array.
   const handleAddTask=()=>{//we create a function for add all task handle.
  //  console.log(task);
  Keyboard.dismiss();//we use this for keyboard disappear when we add task. and agin show when we write a new task.
  setTaskItems([...taskItems,task]) //we use spread operator for add  task in taskItems
 setTask(null)//we use it when we add a new task  first task remove for input.
   }
   // we create a second function to delete over add task
   const completeTask=(index)=>// we put a parameter  index (key contain task) for delete task.
   {
    let itemsCopy=[...taskItems];// we create itemsCopy variable and put value of all taskItems.
    itemsCopy.splice(index,1);//we use splice method to remove one item (task) in itemCopy.
    setTaskItems(itemsCopy);//when we remove we put itemCopy  value in setTask.
   }
   // For Styling.
  return (
    // container Wrapper
    <View style={styles.container}> 
  
       {/* container child */}
      <View style={styles.tasksWrapper}>
        {/* Today tasks  .2 Task wrapper Child*/}
        <Text style={styles.titleWrapper}>
          {/* child task wrapper */}
         My Today's Tasks
        </Text>
        {/* child of task wrapper */}
        <View style={styles.items}>
         {
          //map function we use  on taskItem and iterate one by one .1 item=text that we put, 2 index  is a  (unique)key  of an  item.
          taskItems.map((item,index)=>
          {
            return(
              // we pass on key = index and  on press event  =we call a function name completeTask and pass index  
              <TouchableOpacity key={index} onPress={()=>(completeTask(index))}>
                  {/* we pass props  test name and value we put item (that input we write in a task) */}
                  <Task test={item}></Task>
              </TouchableOpacity>
            )
          })
         }
          {/* This is where the tasks we performs */}
          {/* <Task test={"Task 1"} />
          <Task test={"Task 2"} /> */}
        </View>
      </View>
      {/* key board avoiding view automatically adjust hight,width ,padding etc based on keyboard height. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        {/* now text we input */}
        <TextInput style={styles.input}placeholder={"write a task"}value={task} onChangeText={(text) => setTask(text)} >
          </TextInput> 
          {/* now we add touch able opacity in add Text  2 and also handle add task by calling handle add task in touchable opacity.*/}
        <TouchableOpacity onPress={()=>handleAddTask()}>
        < View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
          </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      
   </View> 
  
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (enabled?"white":"black"), 
  },
  tasksWrapper:{
    paddingTop:80,
    paddingLeft:25,
  },
  titleWrapper:{
fontSize:30,
fontWeight:'bold',
  },
  items:{},
  writeTask:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  input:{
    backgroundColor:"#fff",
    fontSize:18,
    
  paddingVertical:15,
  paddingHorizontal:15,  
  width:250,
  borderRadius:50,
  borderColor:"#c0c0c0",
  borderWidth:2,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#c0c0c0",
    borderWidth:2,


    
  },
  addText:{},

});
