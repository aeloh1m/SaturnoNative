/* eslint-disable prettier/prettier */
import axios from 'axios';

const baseUrl = 'http://10.0.2.2:5555';

export async function authClient(user, passw) {
  try {
    const response = await axios({
      url: `${baseUrl}/Usuario/login?username=${user}&password=${passw}`,
      method: 'GET',
    });
    return response;
  } catch (errors) {
    console.log('auth: ', errors);
  }
}

export async function getProfessionals() {
  try {
    const response = await axios({
      url: `${baseUrl}/profesional`,
      method: 'GET',
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}
