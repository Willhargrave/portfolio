import React, { useState, useEffect } from "react";
import Main from "./components/layout/Main";
import Loading from "./components/common/Loading";
import "./components/style/App.css"

const App = () => {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000)

  return () => clearTimeout(timer);
}, []);

    return (
    <div className="relative">
      {isLoading && <Loading />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Main />
      </div>
    </div>
   )} ;


export default App;
