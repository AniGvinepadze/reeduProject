import React, { createContext, useState, ReactNode } from 'react';

interface Suggestion {
  _id: string;
  title: string;
  details: string;
  category: string;
  upVotes: number;
  comments: string[];
}

interface SuggestionsContextType {
  suggestions: Suggestion[];
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>;
}

export const SuggestionsContext = createContext<SuggestionsContextType | undefined>(undefined);

interface SuggestionsProviderProps {
  children: ReactNode;
}

export const SuggestionsProvider: React.FC<SuggestionsProviderProps> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  return (
    <SuggestionsContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </SuggestionsContext.Provider>
  );
};
