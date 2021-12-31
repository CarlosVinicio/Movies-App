import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { Movie } from '../../interfaces/movieDBInterface';
import { MovieCard } from '../MovieCard';

interface Props {
  items: Movie[] | undefined;
  title?: string;
}

export const HorizontalSlider = (props: Props) => {
  const { title, items } = props;
  return (
    <View style={[styles.container, { height: title ? 250 : 230 }]}>
      {title && <Text style={styles.text}>{title}</Text>}
      <FlatList
        data={items}
        renderItem={({ item }: any) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={(movie: Movie) => movie.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
  },
});
