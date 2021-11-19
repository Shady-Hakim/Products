import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import fetchData from '../../conrollers/fetchData';
import styles from './styles';
import NetworkError from '../../components/networkError';

function SingleProductScreen({route, navigation}) {
  const [product, setProductinfo] = useState([]);
  const [networkError, setNeworkError] = useState();
  const [loading, setLoading] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  let successfullMessage;
  const addToCartHandler = () => {
    setAddToCart(true);
    successfullMessage = setTimeout(() => {
      setAddToCart(false);
    }, 3000);
  };
  const {id} = route.params;
  navigation.setOptions({title: product.title});
  useEffect(() => {
    setLoading(true);
    fetchData(`products/${id}`)
      .then(response => {
        setProductinfo(response.data);
        setLoading(false);
      })
      .catch(error => {
        setNeworkError(error.message);
      });
    return clearTimeout(successfullMessage);
  }, [id, successfullMessage]);
  if (networkError) return <NetworkError text={networkError} />;
  if (loading) return <ActivityIndicator />;
  else
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
        <Text>Category: {product.category}</Text>
        <View style={styles.hr} />
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity style={styles.button} onPress={addToCartHandler}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        {addToCart ? (
          <Text style={styles.success}>
            ✓ The product has been successfully added to the cart
          </Text>
        ) : null}
      </View>
    );
}
SingleProductScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({id: PropTypes.number.isRequired}),
  }).isRequired,
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};
export default SingleProductScreen;
