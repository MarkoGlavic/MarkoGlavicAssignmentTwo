# Assignment 2 - Web API.

Name: Marko Glavic

## Features.

 + Integrated upcoming movies with Mongo - Added the data from tmdb to Mongo.

 + Get Tv Shows - Added an API call to get TV shows, the TV Shows were also integrated with Mongo.

 + Get Tv Show - get details of a particular show.

 + Add rating to show - added a custom attribute called rating, that can be updated using post (created an API call for it as well).

 + Made upcoming movies a private route.

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/MarkoGlavic/MarkoGlavicAssignmentTwo
```

installation: go into both folders and run ipm install

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=yoursecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcoming | Gets a list of upcoming movies | N/A | N/A
| /api/tvs | Gets a list of shows | N/A | N/A
| /api/tvs/{showid} | Gets a show | N/A | N/A
| /api/tvs/{showid}/rating | N/A | Adds rating to a show | N/A
| /api/users | Gets users | N/A | N/A
| /api/users/{userid} | Gets a user | N/A | N/A
| /api/users?action=register | N/A | Registers a user | N/A



## Security and Authentication

Authentication from the labs was used, which uses json web tokens and passport.
There is only 1 private route, which is /api/upcoming. In order to view this page the user needs to log in first.

## Integrating with React App

The React app from last assignment was used and modified to only use the new API. All data was taken from TMDB, but then it was stored in the new Mongo database which allowed the React app to only be dependent on the new API. 

~~~Javascript
export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getMovie = (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getUpcomingMovie = () => {
  return fetch(
     '/api/upcoming/',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getTvs = () => {
  return fetch(
    '/api/tvs/',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
}

export const getTv = (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tvs/${id}`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const rateMovie = (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tvs/${id}/rating`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};



~~~
