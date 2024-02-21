import React, { useState, useEffect } from 'react';
import axios from 'axios'; // pour les requêtes HTTP vers l'API pixabay
import dotenv from 'dotenv';

dotenv.config();


// 1. définir une constante pour l'API KEY
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

const PixabayImageSearch = () => {
  // 2. stocker la recherche de l'utilisateur + les images pixabay
 const [query, setQuery] = useState('');
 const [images, setImages] = useState([]);

  // 3. fetcher les images pixabay et actualiser quand la recherche change
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}+flower&image_type=photo&colors=&orientation=horizontal&category=nature&order=popular&per_page=12&safesearch=true&min_width=600&min_height=600`);
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  if (query.trim() !== '') {
    fetchData();
  }
  }, [query]);

  // 4. créer un input pour la recherche
    const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  // 5. créer un composant Image pour afficher les images
  const Image = ({ imageUrl, alt, user }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="img-height">
        <img src={imageUrl} alt={alt} className="w-full h-full img-cover"/>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">Tags: {alt} <br />{user ? `Photograph: ${user}` : 'Photograph: unknown'}</p>
      </div>
    </div>
  );
  };

  // 6. retourner le composant PixabayImageSearch
  return (
  <div>
    <input
      type="text"
      placeholder="Search for images…"
      value={query}
      onChange={handleInputChange}
      className="border border-gray-400 px-4 py-2 rounded-lg focus:outline-none"
    />
    <div className="grid grid-cols-3 gap-4 mt-4">
      {images.map((image) => (
        <Image key={image.id} imageUrl={image.webformatURL} alt={image.tags} user={image.user} />
      ))}
    </div>
  </div>
  );
};

export default PixabayImageSearch;
