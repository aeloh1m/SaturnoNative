/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';

import {
  NativeBaseProvider,
  Image,
} from 'native-base';

import Home from './Components/Home';
import Login from './Components/Login';
import ExampleLink from './Components/ExampleLink';

export default function App() {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Image source={{uri: 'https://media.discordapp.net/attachments/968647516885245952/1118310893604831362/Frame_3..png'}} alt="Alternate Text" size="sm" width={200}/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/link" element={<ExampleLink/>} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
