import { SERVER_API_TOKEN, SERVER_API_URL, getAuthToken } from '../config';

const API_BASE_URL = SERVER_API_URL;
const API_TOKEN = SERVER_API_TOKEN;

// interface ProductsResponse {
//   data: {
//     count: number;
//     products: IProduct[];
//   }
// }

async function getUserProfile({ userId }: { userId: string }) {
  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  };

  const response = fetch(
    `${API_BASE_URL}/profile/${userId}`,
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
}

async function loginByOTP({ mobile }: { mobile: string }) {
  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobile }),
  };

  const response = fetch(
    `${API_BASE_URL}/auth/login-otp`,
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
}

async function validateOTP({ userId, otpCode }: { userId: string; otpCode: string }) {
  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, otpCode }),
  };

  const response = fetch(
    `${API_BASE_URL}/auth/validate-otp`,
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
}

async function completeProfile({ userId, data }: { userId: string; data: { name: string; family: string } }) {
  const options = {
    method: 'PATCH',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify({ name: data.name, family: data.family }),
  };

  const response = fetch(
    `${API_BASE_URL}/profile/${userId}/complete-profile`,
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
}

// EXPORT API REQUEST

export async function loginByOTPRequest(body: { mobile: string }) {
  const data = await loginByOTP(body);
  return data;
}

export async function validateOTPRequest(body: { userId: string; otpCode: string }) {
  const data = await validateOTP(body);
  return data;
}

export async function getUserProfileRequest(body: { userId: string }) {
  const data = await getUserProfile(body);
  return data;
}

export async function completeProfileRequest(body: { userId: string; data: { name: string; family: string } }) {
  const data = await completeProfile(body);
  return data;
}
