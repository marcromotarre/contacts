import fetcher from "./fetcher";

export const login = (body: { email: string; password: string }) => {
  return fetcher(`/login `, body);
};

export const getUsers = ({ perPage = 6, page = 0 } = {}) => {
  return fetcher(`/users?per_page=${perPage}&page=${page}`);
};
