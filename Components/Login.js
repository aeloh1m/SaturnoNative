/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-native';

import {authClient} from '../Functions/ProfesionalMethods';

import {
  Box,
  Text,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Button,
} from 'native-base';

const Login = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const userHandler = text => setUser(text);
  const passHandler = text => setPass(text);
  const navigate = useNavigate();

  const [message, setMessage] = useState();

  const loginChecker = () => {
    authClient(user, pass).then(function (response) {
      if (response) {
        navigate('/home');
      } else {
        setMessage('Usuario no encontrado');
      }
    });
  };

  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" pt="12">
        <Text fontSize="lg" mb={0}>
          Bienvenidos al panel de control
        </Text>
        <Text fontSize="lg" mb="10">
          de profesionales de{' '}
          <Text bold color="#FF3131">
            Saturno
          </Text>
        </Text>
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="2">
              <FormControl.Label>Nombre de usuario:</FormControl.Label>
              <Input
                type="text"
                placeholder="username"
                value={user}
                onChangeText={userHandler}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Debe tener al menos 6 caracteres
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="2" my="4">
              <FormControl.Label>Contraseña:</FormControl.Label>
              <Input
                type="password"
                placeholder="password"
                value={pass}
                onChangeText={passHandler}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Debe tener al menos 6 caracteres
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Box alignItems="center">
            <Button bgColor="#FF3131" mt="2" onPress={loginChecker}>
              Ingresar
            </Button>
            <Text mt="3">{message}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
