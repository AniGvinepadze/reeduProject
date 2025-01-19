// import InteractiveElement from "../../atoms/interactiveElement";
// import { useState } from "react";
// export default function Categories() {
//   type Category = {
//     id: number;
//     name: string;
//   };
  
//   type InteractiveElementProps = {
//     variant: string;
//     label: string;
//     func: () => void;
//     isActive: boolean;
//   };
  
//   const categoires = [
//     {
//       id: 1,
//       name: "All",
//     },
//     {
//       id: 2,
//       name: "UI",
//     },
//     {
//       id: 3,
//       name: "UX",
//     },
//     {
//       id: 4,
//       name: "Enhancement",
//     },
//     {
//       id: 5,
//       name: "Bug",
//     },
//     {
//       id: 6,
//       name: "Feature",
//     },
//   ];
//   const [active, setActive] = useState("All");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const handleClick = (name: string) => {
//     setActive(name);
//     setSelectedCategory(name);
//   };

//   const getfilteredSuggestions = (category: string):Category[] => {
//     if (category === "All") {
//       return categoires;
//     }
//     return categoires.filter((item) => item.name === category);
//   };
//   const filteredSuggestions:Category[] = getFilteredSuggestions(selectedCategory);
//   return (
//     <div className="bg-white p-6 rounded-[10px] flex flex-wrap gap-x-2 gap-y-3.5 max-900:max-w-[263px] max-900:h-[178px]">
//       {categoires.map((category) => {
//         const isActive = active === category.name;
//         return (
//           <InteractiveElement
//             variant="default"
//             label={category.name}
//             key={category.id}
//             func={() => handleClick(category.name)}
//             isActive={isActive}
//           />
//         );
//       })}
//     </div>
//   );
// }


import InteractiveElement from "../../atoms/interactiveElement";
import { useState } from "react";

export default function Categories() {
  type Category = {
    id: number;
    name: string;
  };

  const categories: Category[] = [
    { id: 1, name: "All" },
    { id: 2, name: "UI" },
    { id: 3, name: "UX" },
    { id: 4, name: "Enhancement" },
    { id: 5, name: "Bug" },
    { id: 6, name: "Feature" },
  ];

  const [active, setActive] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleClick = (name: string) => {
    setActive(name);
    setSelectedCategory(name);
  };

  const getFilteredSuggestions = (category: string): Category[] => {
    if (category === "All") {
      return categories;
    }
    return categories.filter((item) => item.name === category);
    
  };
  console.log("Selected Category:", selectedCategory);
  console.log("Categories:", categories);
  console.log(
    "Filtered Suggestions:",
    selectedCategory === "All"
      ? categories
      : categories.filter((item) => item.name === selectedCategory)
  );
  
  const filteredSuggestions: Category[] = getFilteredSuggestions(selectedCategory);
  console.log("Filtered Suggestions:", filteredSuggestions);

  return (
    <div className="bg-white p-6 rounded-[10px] flex flex-wrap gap-x-2 gap-y-3.5 max-900:max-w-[263px] max-900:h-[178px]">
      {categories.map((category) => {
        const isActive = active === category.name;
        return (
          <InteractiveElement
            variant="default"
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
