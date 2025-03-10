import InteractiveElement from '../../atoms/interactiveElement';
import { useState } from 'react';

export default function Categories({
  setSelectedCategory,
}: {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  type Category = {
    id: number;
    name: string;
  };

  const categories: Category[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'UI' },
    { id: 3, name: 'UX' },
    { id: 4, name: 'Enhancement' },
    { id: 5, name: 'Bug' },
    { id: 6, name: 'Feature' },
  ];

  const [active, setActive] = useState<string>('All');

  const handleClick = (name: string) => {
    setActive(name);
    setSelectedCategory(name);
  };

  return (
    <div className='bg-white p-6 rounded-[10px] shadow-md flex flex-wrap gap-x-2 gap-y-3.5 max-900:max-w-[263px] max-900:h-[178px]'>
      {categories.map((category) => {
        const isActive = active === category.name;
        return (
          <InteractiveElement
            variant='default'
            label={category.name}
            key={category.id}
            func={() => handleClick(category.name)}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}
