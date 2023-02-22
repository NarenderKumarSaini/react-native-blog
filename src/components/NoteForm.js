import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const NoteForm = ({ errorMessage, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);


  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      {errorMessage && (
        <View style={styles.errorContainer}>
          {errorMessage.map(error => {
            return <Text style={styles.errorMessage}>{error}</Text>;
          })}
        </View>
      )}
      <Button title='Save Note' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

NoteForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  errorContainer: {
    marginVertical: 10
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
    textAlign: 'center'
  }
});

export default NoteForm;
