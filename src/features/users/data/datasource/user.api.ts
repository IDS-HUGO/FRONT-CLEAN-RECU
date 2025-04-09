import axios from "axios";
import { UserModel } from "../models/user.model";

const API_URL = "http://localhost:8080/api/users";

export const getAllUsersAPI = async (): Promise<UserModel[]> => {
  const res = await axios.get<UserModel[]>(API_URL);
  return res.data;
};

export const createUserAPI = async (user: UserModel): Promise<void> => {
  await axios.post(API_URL, user);
};

export const updateUserAPI = async (user: UserModel): Promise<void> => {
  await axios.put(`${API_URL}/${user.id}`, user);
};

export const deleteUserAPI = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
