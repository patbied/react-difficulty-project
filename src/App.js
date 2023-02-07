import './App.css';
import Card from './ui/Card'
import BinaryToDecimal from './components/BinaryToDecimal';
import BorderRadiusPreview from './components/BorderRadiusPreview';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <Card title="Binary to Decimal Converter">
        <BinaryToDecimal/>
      </Card>
      <Card title="Border Radius Preview">
        <BorderRadiusPreview/>
      </Card>
      <Card title="Timer">
        <Timer hours={1} minutes={0} seconds={2}/>
      </Card>
  
   
      
    </div>
  );
}

export default App;
