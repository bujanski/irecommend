"use client";
import { useState } from 'react';

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    directors: [],
    producers: [],
    screenwriters: [],
    cast: [],
    cinematographers: [],
    editor: '',
    composer: '',
    releaseDate: '',
    productionCompanies: [],
    countryOfOrigin: '',
    languages: [],
    runTime: '',
    genres: [],
    ageRatings: [],
    keywords: [],
    synopsis: '',
    color: '',
    imdbId: '',
    tmdbId: '',
    website: '',
    streamPlatforms: [],
    awards: [],
    budget: 0,
    boxOffice: 0,
    posterURL: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch( './api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response);

    if (response.ok) {
      alert('Movie added successfully!');
      setFormData({
        title: '',
        directors: [],
        producers: [],
        screenwriters: [],
        cast: [],
        cinematographers: [],
        editor: '',
        composer: '',
        releaseDate: '',
        productionCompanies: [],
        countryOfOrigin: '',
        languages: [],
        runTime: '',
        genres: [],
        ageRatings: [],
        keywords: [],
        synopsis: '',
        color: '',
        imdbId: '',
        tmdbId: '',
        website: '',
        streamPlatforms: [],
        awards: [],
        budget: 0,
        boxOffice: 0,
        posterURL: '',
      });
    } else {
      alert('Failed to add movie.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add similar input fields for other attributes */}
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
