import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 1.89,
    elevation: 2,
  },
});
