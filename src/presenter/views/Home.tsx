import { useEffect, useState } from 'react';
import Sidebar from '../components/molecules/homepage/Sidebar';
import Suggestion from '../components/molecules/homepage/Suggestion';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getUser } from '../../utils/getUser';

type User = {
  fullName: string;
  email: string;
  _id: string;
  posts: string[];
};

const cookies = new Cookies();
export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    const fetchUser = async () => {
      const token = cookies.get('accessToken');
      if (token) {
        const fetchedUser = await getUser(token, navigate);
        if (fetchedUser) setUser(fetchedUser); 
      } else {
        navigate('/auth/sign-in'); 
      }
    };

    fetchUser();
  }, [navigate]);

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
