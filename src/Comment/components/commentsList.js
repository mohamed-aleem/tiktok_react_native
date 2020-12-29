import React from 'react';
import {ScrollView, FlatList, View, Text, StyleSheet} from 'react-native';
import Container from '../../App/Components/container';

export default ({comments}) => {
  return (
    <Container f1 clr="rgba(240,240,240,1)" pv={5} >
      <Text style={styles.commentsCount}>{`${comments.length} comments`}</Text>
      <FlatList
        keyExtractor={({index}) => index}
        data={comments}
        renderItem={({item, index}) => {
          return (
            <Container p={10} row key={index}>
              <Container clr="gray" h={30} w={30} br={15} mh={10} />
              <View>
                <Text style={styles.subtitle}>Merna hadad</Text>
                <Text>
                  {item.text} <Text style={styles.date}>34 seconds</Text>
                </Text>
              </View>
            </Container>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  commentsCount: {textAlign: 'center', fontWeight: '700', margin: 10},
  subtitle: {color: 'gray', fontWeight: '700'},
  date: {color: 'gray', fontSize: 12},
});
