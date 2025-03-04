import SuggestionHeader from '../homepage/SuggestionHeader';
import SuggestionList from '../homepage/SuggestionList';

export default function Suggestion({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <div className="w-full">
      <SuggestionHeader />
      <SuggestionList selectedCategory={selectedCategory} />
    </div>
  );
}
