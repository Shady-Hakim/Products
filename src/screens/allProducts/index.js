import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import fetchData from '../../conrollers/fetchData';
import SingleProduct from '../../components/singleProduct';
import {
  fetchListRequest,
  fetchListSuccess,
  fetchListfailure,
} from '../../redux';
import styles from './styles';
import NetworkError from '../../components/networkError';

function AllProductsScreen({navigation}) {
  const productsList = useSelector(state => state && state.productsList);
  const networkError = useSelector(state => state && state.error);
  const loading = useSelector(state => state && state.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListRequest());
    fetchData('products')
      .then(response => {
        dispatch(fetchListSuccess(response.data));
      })
      .catch(error => {
        console.log('error', error.message);
        dispatch(fetchListfailure(error.message));
      });
  }, [dispatch]);
  if (networkError) return <NetworkError text={networkError} />;
  else if (loading) return <ActivityIndicator />;
  else
    return (
      <FlatList
        data={productsList}
        style={styles.container}
        renderItem={({item}) => (
          <SingleProduct
            onPress={() =>
              navigation.navigate('Single product', {
                id: item.id,
              })
            }
            item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
}
AllProductsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  fetchListSuccess: PropTypes.func,
  fetchListfailure: PropTypes.func,
};
export default AllProductsScreen;
