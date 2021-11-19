import {StyleSheet} from 'react-native';

const constants = {
  white: '#fff',
  black: '#000',
  primary: '#0B2240',
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-between',
    backgroundColor: constants.primary,
    marginVertical: 5,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  title: {
    color: constants.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#19ea70',
  },
  rate: {
    color: '#19ea70',
  },
  button: {
    backgroundColor: constants.white,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: constants.primary,
  },
});
export default styles;
