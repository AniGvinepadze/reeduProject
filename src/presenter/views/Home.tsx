import { useEffect, useState } from 'react';
import Sidebar from '../components/molecules/homepage/Sidebar';
import Suggestion from '../components/molecules/homepage/Suggestion';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { getUser } from '../../utils/getUser';

type User = {
  fullName: string;
  email: string;
  _id: string;
  posts: string[];
};

const cookies = new Cookies();
export default function Home() {
  const cookes = new Cookies();
  const token: string = cookes.get('accessToken');
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    const getCurrentUser = async (token: string) => {
      try {
        const res = await axios.get('http://localhost:3000/auth/current-user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (error) {
        navigate('/auth/sign-in');
      }
    };

    getCurrentUser(token);
  }, [token]);

  if (!user) return null;

  return (
    <main className='container max-650:px-0'>
      <div className='max-w-[360px] w-full flex justify-center  mt-10 p-4 rounded-2xl bg-white shadow-md'>
        <h1 className='font-bold text-xl text-darkBlue'>
          Welcome: {user.fullName}
        </h1>
      </div>
      <div className='flex items-start mt-10  gap-[30px] max-900:flex-col max-650:mt-0 max-650:gap-0'>
        <section className='flex w-[255px]  max-900:max-w-[700px] max-900:w-full '>
          <Sidebar setSelectedCategory={setSelectedCategory} />
        </section>
        <div className='flex-1 max-900:w-full'>
          <Suggestion selectedCategory={selectedCategory} />
        </div>
      </div>
    </main>
  );
}
