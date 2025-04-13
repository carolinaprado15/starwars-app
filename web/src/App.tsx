import './App.css'
import './index.css';
import { Layout } from './components';
import { AppProvider } from './context/App/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}

export default App;
