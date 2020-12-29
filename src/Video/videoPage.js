import React, {useState} from 'react';
import {View, StyleSheet, Modal, Alert, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import CommentsView from '../Comment/views/commentsView';
import Container from '../App/Components/container';

import {LatestComment, VideoMeta} from './components';

export default ({source, id, commentsCount, shouldPlay}) => {
  const [showComments, setShowComments] = useState(false);
  const [userPause, setUserPause] = useState(false);

  const togglePause = () => setUserPause(!userPause);

  return (
    <TouchableOpacity style={{flex: 1}} onPress={togglePause}>
      <Container center f1>
        <Modal animationType="slide" transparent={true} visible={showComments}>
          <CommentsView videoId={id} onDismiss={() => setShowComments(false)} />
        </Modal>

        <Video
          source={source}
          paused={!shouldPlay || userPause}
          style={styles.videoSection}
          resizeMode="cover"
          repeat={true}
        />

        <View style={styles.absolute}>
          <Container f1 row hLeft hCenter>
            <Container f1 row hLeft spaceBetween p={20}>
              <LatestComment />
              <VideoMeta
                setShowComments={setShowComments}
                commentsCount={commentsCount}
              />
            </Container>
          </Container>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  absolute: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
  videoSection: {flex: 1, width: '100%', height: '100%'},
});
