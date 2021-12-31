import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieCard } from '../../components/MovieCard';
import { useMovies } from '../../hooks/useMovies';
import { styles } from './styled';
import { Movie } from '../../interfaces/movieDBInterface';
import { HorizontalSlider } from '../../components/HorizontalSlider';

export const HomeScreen = () => {
  const { width: windowWidth } = Dimensions.get('window');
  const {
    isFetchingData,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  } = useMovies();
  const { top } = useSafeAreaInsets();

  const getActivityLoading = () => {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  };

  const getHomeComponent = () => {
    return (
      <View style={[styles.container, { marginTop: top + 10 }]}>
        <ScrollView>
          <View>
            <Carousel
              data={nowPlayingMovies || []}
              renderItem={({ item }: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
            />
          </View>
          <View>
            <HorizontalSlider title="Populares" items={popularMovies} />
          </View>
          <View>
            <HorizontalSlider title="Mejor valoradas" items={topRatedMovies} />
          </View>
          <View>
            <HorizontalSlider title="Próximas" items={upcomingMovies} />
          </View>
        </ScrollView>
      </View>
    );
  };

  return <>{!isFetchingData ? getHomeComponent() : getActivityLoading()}</>;
};
