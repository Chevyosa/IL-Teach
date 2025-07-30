import Form from "./form";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full gap-2">
        <p>Welcome to Login Page!</p>
        <Form />
      </div>
    </div>
  );
}

export default App;
