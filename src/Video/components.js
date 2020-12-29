import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Container from '../App/Components/container';

const VideoOption = ({icon, text, ...props}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Container mb={20} center>
        <Icon name={icon} size={30} color="white" />
        <Text style={styles.commentText}>{text}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export const LatestComment = ({}) => {
  return (
    <View>
      <Text style={styles.latestCommentTitle}>@Aya.gayar</Text>
      <Text style={styles.latestCommentTitle}>You are awesome 😍😍😍</Text>
      <Container row >
        <Icon name="music-video" size={16} color="white" />
        <Text
          style={{
            color: 'white',
          }}>
          {' '}
          | sswaf Original Music
        </Text>
      </Container>
    </View>
  );
};

export const VideoMeta = ({setShowComments, commentsCount}) => {
  return (
    <Container center>
      <VideoOption icon="spa" text={'12.5 k'} />
      <VideoOption
        icon="comment"
        text={commentsCount}
        onPress={() => {
          setShowComments(true);
        }}
      />
      <VideoOption icon="share" text={'share'} />
      <Icon name="cloud-circle" size={40} color="black" />
    </Container>
  );
};

const styles = StyleSheet.create({
  commentText: {color: 'white', fontWeight: '700'},
  latestCommentTitle: {color: 'white', marginBottom: 5},
  latestCommentSubtitle: {color: 'white', fontWeight: '700', marginBottom: 10},
});
