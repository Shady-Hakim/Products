import {StyleSheet} from 'react-native';

const constants = {
  white: '#fff',
  black: '#000',
  green: '#00bf6c',
  primary: '#0B2240',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 40,
  },
  title: {
    color: constants.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: constants.green,
  },
  description: {
    marginTop: 10,
  },
  button: {
    backgroundColor: constants.primary,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: constants.white,
  },
  success: {
    marginTop: 10,
    color: constants.green,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginVertical: 5,
  },
});
export default styles;
