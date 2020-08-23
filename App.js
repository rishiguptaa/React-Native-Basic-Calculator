import { StatusBar } from 'expo-status-bar';
import React, { Component   } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      first : null,
      second : null,
      total : null
    }
  }

  onAddition(){
    const {first,second} = this.state

    const total = Number(first) + Number(second)
    this.setState({total : total})
  }

  onSubtraction(){
    const {first,second} = this.state

    const total = Number(first) - Number(second)
    this.setState({total : total})
  }

  onMultiplication(){
    const {first,second} = this.state

    const total = Number(first) * Number(second)
    this.setState({total : total})
  }

  onDivision(){
    const {first,second} = this.state

    const total = Number(first) / Number(second)
    this.setState({total : total})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Basic Calculator</Text>
        <TextInput style={styles.input} placeholder="  Enter 1st number" value={this.state.first} onChangeText={text => this.setState({first:text})}/>
        <TextInput style={styles.input} placeholder="  Enter 2nd number" value={this.state.second} onChangeText={text => this.setState({second:text})}/>
        <Button color = "#841550" title="+" onPress = {this.onAddition.bind(this)}/>
        <Button color = "#841550" title="-" onPress = {this.onSubtraction.bind(this)}/>
        <Button color = "#841550" title="*" onPress = {this.onMultiplication.bind(this)}/>
        <Button color = "#841550" title="/" onPress = {this.onDivision.bind(this)}/>
        <Text>Ans is {this.state.total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 0.4,
    justifyContent: 'space-between'
  },
  heading:{
    fontSize : 20,
    textAlign : 'center',
    marginTop : 40,
  },
  input:{
    backgroundColor : 'grey',
    margin : 2,
    borderColor : 'black',
  }
});
