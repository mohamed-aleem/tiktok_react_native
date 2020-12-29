import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export default (props) => {
  const [value, onChangeText] = useState('');
  const onSubmit = () => {
    props.addComment(value);
    onChangeText('');
  };
  return (
    <TextInput
      placeholder="Add Comment .."
      value={value}
      onChangeText={onChangeText}
      style={{padding: 20, marginBottom: 20}}
      onSubmitEditing={onSubmit}
    />
  );
};
