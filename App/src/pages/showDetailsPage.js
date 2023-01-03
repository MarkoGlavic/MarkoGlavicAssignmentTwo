import React from "react";
import { useParams } from 'react-router-dom';
import ShowDetails from "../components/showDetails/";
import PageTemplate from "../components/templateShowPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getTv } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { useState } from "react";
import { ShowsContext } from "../contexts/showsContext";
import { useContext } from "react";

const ShowDetailsPage = (props) => {
  const context = useContext(ShowsContext);

  const { id } = useParams();
  const [rating, setRating] = useState("");

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const ratingChange = () => {
    context.ratingChange(rating);
  };
  

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <ShowDetails show={show} />
          </PageTemplate>
          <input
        id="rating"
        placeholder="rating"
        onChange={(e) => {
          setRating(e.target.value);
        }}
      ></input>
            <button onClick={ratingChange}>Log in</button>

        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default ShowDetailsPage;