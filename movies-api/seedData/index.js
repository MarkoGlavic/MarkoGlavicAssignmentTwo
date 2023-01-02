import userModel from '../api/users/userModel';
import genresModel from '../api/genres/genresModel'
import users from './users';
import dotenv from 'dotenv';
import genres from './genres';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import upcomingModel from '../api/upcomingMovies/upcomingModel';
import upcoming from './upcoming';
import tvModel from '../api/tvs/tvModel';
import tvs from './tvs';
dotenv.config();

// deletes all user documents in collection and inserts test data



// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
    console.log('load genres');
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genres: ${err}`);
    }
  }

  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }


  
  export async function loadUpcoming() {
    console.log('load seed data');
    console.log(upcoming.length);
    try {
      await upcomingModel.deleteMany();
      await upcomingModel.collection.insertMany(upcoming);
      console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  
  export async function loadTvs() {
    console.log('load seed data');
    console.log(tvs.length);
    try {
      await tvModel.deleteMany();
      await tvModel.collection.insertMany(tvs);
      console.info(`${tvs.length} Shows were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();//you may not need this line if you skipped the exercises
  loadMovies();//ADD THIS LINE
  loadUpcoming();
  loadTvs();
}