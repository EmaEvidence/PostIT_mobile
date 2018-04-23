import React from 'react';
import { Image } from 'react-native';

/**
 * @returns
 */
const Loader = (props) => {
  let imageUri = '';
  if (props.showLoader) {
    imageUri = 'http://res.cloudinary.com/damc3mj5u/image/upload/v1519080450/ajax-loader_nvwchn.gif';
  }
  return (
    <Image
      source={{ uri: imageUri }}
      style={{ width: 50, height: 50 }}
    />
  );
};

export default Loader;
