import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components";
import { useFetch } from "./hooks";

const url = "";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);
  if (loading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return <div>Hay error...</div>
  }
  return (
    <div>aaa</div>
  );

  // <Button label={`Count is ${count}`}  parentMethod={counter} />
  // <div className="custom">Hello world!</div>);
}

export default App;
