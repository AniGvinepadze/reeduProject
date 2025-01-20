import { SuggestionsProvider } from "../context";
import AppRoute from "./presenter/components/routes";

export default function App() {
  return (
    <>
    <SuggestionsProvider>
      <AppRoute />
      </SuggestionsProvider>
    </>
  );
}
