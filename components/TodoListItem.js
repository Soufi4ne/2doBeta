import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({ textValue, id, checked, onRemove, onToggle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
           
            <Icon name="circledowno" size={30} color="#504781" />
          </View>
        ) : (
          <View style={styles.circle}   ><Text style={styles.violetText}> Complete</Text></View>
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            <Icon name="delete" size={30} color="red" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5B927',
    marginLeft: 8,
    marginRight: 8,
    
    borderRadius: 15,
    marginBottom: 15,
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    color: "#504781",
    borderColor: '#fff',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
    width: 75,
    height: 25,
    backgroundColor: '#504781',
    borderRadius: 10,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#504781',
    color: '#fff',
    backgroundColor: '#fff',
    borderRadius: 20,

  },
  strikeText: {
    color: '#fff',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  violetText: {
    color: 'white',
  },
});

export default TodoListItem;