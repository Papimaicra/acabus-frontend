import React from 'react';
import LoginForm from './components/LoginCom';
import Navbar from './components/Navbar';
import './App.css'; // Importa tu archivo de estilos si tienes uno

function App() {
  return (
    <div className="App">
      <div className="background-image" />
        <Navbar />
        <LoginForm />
    </div>
  );
}

export default App;
