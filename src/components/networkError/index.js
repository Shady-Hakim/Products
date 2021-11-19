import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles';

function NetworkError({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}
NetworkError.propTypes = {
  text: PropTypes.string,
};
export default NetworkError;
