import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function SingleProduct({item, onPress}) {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      <Text style={styles.rate}>
        Rate: {item.rating.rate} from {item.rating.count} users
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>More Info</Text>
      </TouchableOpacity>
    </View>
  );
}

SingleProduct.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};
export default SingleProduct;
