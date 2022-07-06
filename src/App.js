import useCar from "./CarControl";

function App() {
  const { control } = useCar();
  return (
    <div className="App">
      <button onClick={() => control.accelerate(50)}>Test accelerate </button>
    </div>
  );
}

export default App;
