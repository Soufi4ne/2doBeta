import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TodoInsert = ({ onAddTodo }) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an new task!!"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#fff'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button color ='#491DF4' title={'+'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 24,
    marginLeft: 20,
    color: "#fff",
  },
  button: {
    marginRight: 10,
    width: 35,
    height: 35,

  },
});

export default TodoInsert;