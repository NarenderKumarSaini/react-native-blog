import React, { useContext } from 'react';

import { StyleSheet } from 'react-native';

import NoteForm from '../components/NoteForm';
import { Context } from '../context/NoteContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editNote } = useContext(Context);

  const note = state.find((note) => note.id === id);

  return (
    <NoteForm
      initialValues={{ title: note.title, content: note.content }}
      onSubmit={(title, content) => {
        editNote(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
