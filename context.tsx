import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export type Suggestion = {
  category: string;
  comments: any[];
  details: string;
  status: string;
  title: string;
  upVotes: number;
  user: {
    email: string;
    fullName: string;
  };
  _id: string;
  __v: number;
};

interface SuggestionsContextProps {
  suggestions: Suggestion[];
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>;
}

const SuggestionsContext = createContext<SuggestionsContextProps | undefined>(
  undefined
);

export const SuggestionsProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const cookes = new Cookies();

  const token = cookes.get('accessToken');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Suggestion[]>(
          'http://localhost:3000/posts',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <SuggestionsContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </SuggestionsContext.Provider>
  );
};

export const useSuggestions = () => {
  const context = useContext(SuggestionsContext);
  if (!context) {
    throw new Error('useSuggestions must be used within a SuggestionsProvider');
  }
  return context;
};
