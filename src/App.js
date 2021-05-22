import './App.css';
import List from "./components/List";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();


function App() {
  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
      <List/>
    </div>
          </QueryClientProvider>
  );
}

export default App;
