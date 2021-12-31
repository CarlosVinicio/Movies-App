import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../../interfaces/movieDBInterface';
import { styles } from './styled';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = (props: Props) => {
  const { movie, height = 420, width = 300 } = props;
  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.9}
      style={[styles.container, { height, width }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: urlImage }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
