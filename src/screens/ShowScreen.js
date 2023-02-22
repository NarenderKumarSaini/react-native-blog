import React, { useContext } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { Context } from '../context/NoteContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const note = state.find(
    (note) => note.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
        style={styles.actionIcon}
      >
        <EvilIcons name='pencil' size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  title: {
    fontSize: 30
  },
  content: {
    marginTop: 20,
    fontSize: 20
  },
  actionIcon: {
    marginRight: 30
  }
});

export default ShowScreen;
