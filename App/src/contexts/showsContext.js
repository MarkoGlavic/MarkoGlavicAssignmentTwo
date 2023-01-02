import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTvs } from "../api/tmdb-api";

export const ShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { shows: action.payload.result};
    default:
      return state;
  }
};

const ShowsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { shows: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTvs().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        setAuthenticated
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider