/* eslint-disable prettier/prettier */
import React from 'react';

import {Box, Button, Text, Divider} from 'native-base';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <>
      <Box flex={1} bg="#fff" py="6" px="6">
        <Text fontSize="lg" mb="4">
          ¡Bienvenido <Text bold>Usuario</Text>!
        </Text>
        <Button bgColor="#FF3131" width="100%" mb="2">
          Reservar un turno
        </Button>
        <Button bgColor="#FF3131" width="100%" mb="2">
          Administrar turnos
        </Button>
        <Text mb="3" mt="4" fontSize="lg">
          Turnos
        </Text>
        <Divider mb="2" />
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="calendar-plus-o" size={15} />
            {'   '}
            <Text>Reservar un turno</Text>
          </Text>
        </Link>
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="calendar-o" size={15} />
            {'  '} Turnos de esta semana
          </Text>
        </Link>
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="address-book-o" size={15} /> {'  '}Configurar turnos
          </Text>
        </Link>

        <Text mb="3" mt="6" fontSize="lg">
          Servicios
        </Text>
        <Divider mb="2" />
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="address-book-o" size={15} /> {'  '}Editar servicios
          </Text>
        </Link>

        <Text mb="3" mt="6" fontSize="lg">
          Configuración
        </Text>
        <Divider mb="2" />
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="credit-card" size={15} /> {'  '}Estado de la Suscripción
          </Text>
        </Link>
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="id-card-o" size={15} />
            {'  '} Editar información personal
          </Text>
        </Link>
        <Link to={'/link'}>
          <Text py="1" fontSize="md">
            <Icon name="keyboard-o" size={15} />
            {'  '} Editar Contraseña
          </Text>
        </Link>
        <Link to={'/'}>
          <Text py="1" fontSize="md">
            <Icon name="share-square-o" size={15} /> {'  '}Cerrar sesión
          </Text>
        </Link>
      </Box>
    </>
  );
};

export default Home;
