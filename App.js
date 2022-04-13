import React from 'react';
import { View , Text , StyleSheet, Modal, TextInput , KeyboardAvoidingView , TouchableOpacity , FlatList} from 'react-native';
import { Header } from './components/Header';
import ActionButton from 'react-native-action-button';
import Context from './ContextAPI/context';
import GlobalState from './ContextAPI/GlobalState';
export default class App extends React.Component {
  static contextType = Context;
  state ={
    modalVisible : false,
    newTask: ''
  }

  render() {
    return(
      <GlobalState>
    <View style={styles.container}>
     {/* <Header title='Todo App' />  */}
    
    
       { this.context.tasks.map((item , index)=> {
        <Text style={styles.text}>{item}</Text>
       })
       }

  
      <Modal
  animationType="slide"
  transparent={true}
  visible={this.state.modalVisible}
  onRequestClose={() => {this.setState({modalVisible : false})}}
  >
    
  <View
    style={{
      height: '30%',
      marginTop: 'auto',
    
    }}>
<KeyboardAvoidingView
    style={{ flex: 1}}>
          <View style={styles.footer}>
      <Text style={styles.headerText}>Mark Your Todo</Text>
      <View style={styles.box}>
        <TextInput  placeholder='Enter your Todo' style={{marginLeft :5}}    onChangeText={(text)=>{this.setState({ newTask : text})}}/>
      </View>
      <TouchableOpacity style={styles.button}   onPress={()=>this.context.addNewTask(this.state.newTask)}>
            <Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>

  </View>
 
</Modal>
</View>
     <ActionButton
    buttonColor="#FF5733"
    onPress={() => {this.setState({ modalVisible : true})}}
  />
   
    </GlobalState>
   
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    padding: 26,
    fontWeight :"bold",
    alignSelf :"center"
  },
  
  footer: {
    flex: 1,
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius : 20,
    elevation:2,
    borderTopWidth :1,
    borderLeftWidth: 1,
    borderRightWidth : 1,
    borderColor :"#FF5733"
  },

  box:{
    height : 50,
    width :"90%",
    alignSelf :"center",
    borderRadius : 20,
    borderWidth : 1,
    borderColor :"#FF5733"
  },
  button:{
    height : "22%",
    width :"40%",
    alignSelf :"center",
    borderRadius : 30,
    marginTop : 20,
    backgroundColor :"#FF5733",
    justifyContent:"center",
    alignItems :"center"

  },
  textStyle:{
    color :"white",
    fontSize :20,
    fontWeight :"bold",
    
},
rowcontainer: {
  flex: 1,
  flexDirection: 'column',
  marginLeft: 20,
  marginRight: 20,
  borderBottomWidth: 1,
  borderBottomColor: 'gray'
 },
 title: {
  marginTop:20,
  marginLeft: 20,
  fontSize: 30,
 },
 text: {
  padding: 10,
  fontSize: 20
 },
 delete: {
  alignSelf: 'flex-end',
  padding: 8,
  fontSize: 15,
 }
  
})