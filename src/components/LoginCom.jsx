import React from 'react';
import logo from "../media/logo-acabus.png"

function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login-container text-center p-8 border border-gray-300 rounded " style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="username" className="block text-left mb-2">Username:</label>
            <input type="text" id="username" name="username" className="w-full py-2 px-4 border border-gray-300 rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-left mb-2">Password:</label>
            <input type="password" id="password" name="password" className="w-full py-2 px-4 border border-gray-300 rounded" required />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
