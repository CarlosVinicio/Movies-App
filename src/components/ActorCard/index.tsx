import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../interfaces/CreditsMovie';

interface Props {
  actor: Cast; // Cast is the actor interface
}

export const ActorCard = ({ actor }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: imageUrl }} style={styles.source}/>
      </View>
      <View style={styles.actorDetail}>
        <Text style={styles.actorTitle}>{actor.original_name}</Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 5,
    backgroundColor: '#AFEEEE',
    borderRadius: 5
  },
  image: {
    marginRight: 10,
  },
  source: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  actorDetail: {},
  actorTitle: {
    fontWeight: 'bold',
  },
});
