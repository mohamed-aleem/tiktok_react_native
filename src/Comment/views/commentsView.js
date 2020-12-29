import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';

import CommentsList from '../components/commentsList';
import CommentEntry from '../components/commentEntry';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardEvent,
} from 'react-native';
import Container from '../../App/Components/container';
import {commentsSelector} from '../selector';
import {addComment} from '../actions';

const CommentsView = ({comments, videoId, ...props}) => {
  const [entryOffset, setEntryOffset] = useState(0);
  const keyboardWillShow = (e) => {
    moveUp(e.endCoordinates.height);
    //setEntryOffset(e.endCoordinates.height);
  };

  const keyboardWillHide = () => {
    moveDown();
    //setEntryOffset(0);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
    };
  }, []);

  const avoidKeyboardAnim = useRef(new Animated.Value(0)).current;

  const moveUp = (height) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(avoidKeyboardAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const moveDown = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(avoidKeyboardAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const addComment = (text) => {
    props.addComment({text, videoId});
  };
  return (
    <Container f1>
      <TouchableOpacity style={styles.absolute} onPress={props.onDismiss} />

      <Animated.View
        style={[
          styles.commentsSection,
          {
            bottom: avoidKeyboardAnim,
          },
        ]}>
        <CommentsList comments={comments} />
        <CommentEntry addComment={addComment} />
        {/* <View style={[styles.commentsSection, {bottom: entryOffset}]}>
        <CommentsList comments={comments} />
        <CommentEntry addComment={addComment} />
      </View> */}
      </Animated.View>
    </Container>
  );
};

const styles = StyleSheet.create({
  commentsSection: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  absolute: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
});

const mapStateToProps = (state, props) => ({
  comments: commentsSelector(state, {videoId: props.videoId}),
});

const mapDispatchToProps = {
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsView);
