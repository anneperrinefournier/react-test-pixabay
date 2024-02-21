import React from 'react';
import PixabayImageSearch from './PixabayImageSearch';

function App() {
  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-3xl font-bold font-serif text-center mb-4">Search a flower image by name or color</h1>
      <PixabayImageSearch />
    </div>
  );
}

export default App;
