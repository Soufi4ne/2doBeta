import React, {useState} from 'react';
import TodoList from './components/TodoList';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from './components/TodoInsert';


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>
        2d0 Efrei</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5B927',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#F5B927',
  },
  card: {
    backgroundColor: '#2C2626',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
    borderColor: '#4446A2',
    borderWidth: 4,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default App;