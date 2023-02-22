import React, { useContext } from 'react';

import { StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import { NavigationEvents } from 'react-navigation';

import NoteForm from '../components/NoteForm';
import { Context } from '../context/NoteContext';

const CreateScreen = ({ navigation }) => {
  const { state, addNote, clearErrorMessage } = useContext(Context);

  return (
    <View>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <NoteForm
        errorMessage={state.errorMessage}
        onSubmit={(title, content) => {
          addNote(title, content, () => navigation.navigate('Index'));
        }}
        initialValues={{ title: '', content: '' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
