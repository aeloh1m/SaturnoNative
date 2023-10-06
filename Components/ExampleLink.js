/* eslint-disable prettier/prettier */
import React from 'react';

import {Box, Button, Text} from 'native-base';
import {useNavigate} from 'react-router-native';

const ExampleLink = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };
  return (
    <>
      <Box flex={1} bg="#fff" pt="12" px="6">
        <Text>Hola desde un link random!</Text>
        <Button bgColor="#FF3131" width="100%" mt="4" onPress={goToHome}>
          Volver a la home
        </Button>
      </Box>
    </>
  );
};

export default ExampleLink;
