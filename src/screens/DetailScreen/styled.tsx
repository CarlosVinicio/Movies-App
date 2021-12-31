import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    elevation: 9,
    shadowRadius: 9,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  //Data Conteiner
  dataContainer: {
    marginTop: 15,
    flex: 1,
    marginBottom: 10
  },
  headerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 20,
  },
  details: {
    marginHorizontal: 20,
  },
  dataContainerTitle: {
    fontSize: 20,
  },
  dataContainerSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
});
