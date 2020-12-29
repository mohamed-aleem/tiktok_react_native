import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

import VideoView from '../Video/videoPage';
import {videosSelector} from '../Video/selector';
import {setCurrentVideoIndex} from '../Video/actions';

const HomeView = ({videos, ...props}) => {
  const onSwipe = (index) => {
    props.setCurrentVideoIndex(index);
  };

  return (
    <Swiper
      loop={false}
      horizontal={false}
      showsPagination={false}
      onIndexChanged={onSwipe}>
      {videos.map((video, index) => {
        return <VideoView key={index} {...video} />;
      })}
    </Swiper>
  );
};

const mapStateToProps = (state) => ({
  videos: videosSelector(state),
});

const mapDispatchToProps = {
  setCurrentVideoIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
