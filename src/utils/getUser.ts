import axios from 'axios';
type User = {
  fullName: string;
  email: string;
  _id: string;
  posts: string[];
};
export const getUser = async (
  token: string,
  navigate: (path: string) => void
): Promise<any> => {
  try {
    const response = await axios.get(
      'http://localhost:3000/auth/current-user',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    navigate('/auth/sign-in');
  }
};
