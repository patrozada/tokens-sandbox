
import Layout from './layouts/Layout';
import Card from './components/Card';
import { mockData } from './mockData';
import './App.css';
import Button from './components/Button';
import ButtonDanger from './components/ButtonDanger';
import ButtonSuccess from './components/ButtonSuccess';

function App() {
  return (
    <Layout>
      {mockData.map((card)=><Card data={card}/>)}
      <>
        <Button/>
        <Button disabled />
        <ButtonDanger/>
        <ButtonDanger disabled/>
        <ButtonSuccess />
        <ButtonSuccess disabled/>
      </>
    </Layout>
  );
}

export default App;
