import fs from 'fs';
import path from 'path';
import data from './tv_imdb_pairs.json' assert { type: 'json' }; // Add the "assert { type: 'json' }"


const apiKey = 'b8f6ff93'; // OMDB API key
const omdbUrl = (imdbId) => `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

let results = [];
let queryCount = 0;

// Function to query OMDB for a specific imdbId
const queryOMDB = async (imdbId) => {
  try {
    const response = await fetch(omdbUrl(imdbId));
    const data = await response.json();
    console.log(data.Title)
    return data;
  } catch (error) {
    console.error(`Error querying OMDB for ID ${imdbId}:`, error);
    return null;
  }
};

// Function to save the results to the OMDB-results.json file
const saveResults = () => {
  const filePath = path.join(process.cwd(), 'OMDB-tv-results.json');
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
  console.log('Results saved to OMDB-tv.json');
};

// Main function to process the data
const processData = async () => {
  for (const item of data) {
    const result = await queryOMDB(item.imdbId);
    if (result) {
      results.push(result);
    }

    queryCount++;
    if (queryCount % 100 === 0) {
      saveResults(); // Save results after every 100 queries
    }

    await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting: 750ms delay
  }

  // Save any remaining results after the loop is done
  if (queryCount % 100 !== 0) {
    saveResults();
  }

  console.log('Finished processing all queries.');
};

// Execute the function
processData();
