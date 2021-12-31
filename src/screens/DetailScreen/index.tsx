import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styled';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActorCard } from '../../components/ActorCard';

//RootStackParams objecto que marca que props tiene que recibir este componente;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = (props: Props) => {
  //params renombrado a movie
  const { params: movie } = props.route;
  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { cast, movieDetail, isloading } = useMovieDetails(movie.id);

  return (
    <>
      {!isloading ? (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: urlImage }} />
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.details}>
                <Text style={styles.dataContainerSubTitle}>{movie.title}</Text>
                <View style={styles.headerDetails}>
                  <Text>
                    -{' '}
                    {movieDetail?.genres
                      .map(genre => `${genre.name}`)
                      .join(', ')}
                  </Text>
                  <View style={styles.score}>
                    <Icon name="star-outline" />
                    <Text style={styles.scoreTitle}>
                      {movieDetail?.vote_average}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Sipnosis
                  </Text>
                  <Text>{movieDetail?.overview}</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginVertical: 10,
                    }}>
                    Actores
                  </Text>
                </View>
              </View>
              <View>
                <FlatList
                  data={cast}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => <ActorCard actor={item} />}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      )}
    </>
  );
};
