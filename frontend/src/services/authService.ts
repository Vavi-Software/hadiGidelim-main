// src/services/authService.ts
import axios from "axios";

const API_URL = "https://api.example.com/auth/";

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginUserData {
  username: string;
  password: string;
}

export const registerUser = async (userData: RegisterUserData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData: LoginUserData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};
