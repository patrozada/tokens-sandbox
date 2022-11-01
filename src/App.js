
import Layout from './layouts/Layout';
import Card from './components/Card';
import { mockData } from './mockData';
import './App.css';

function App() {
  console.log(mockData)
  return (
    <Layout>
      {mockData.map((card)=><Card data={card}/>)}
    </Layout>
  );
}

export default App;
