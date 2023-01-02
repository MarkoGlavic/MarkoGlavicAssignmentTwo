import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateShowListPage";
import { getTvs } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import Grid from "@mui/material/Grid";


const ShowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery(['discover-shows'], getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  
    return (
      <>
      <PageTemplate
        title="TV Shows"
        shows={shows}
      action={(show) => {
      
      }}
      />
      <Grid
    container
    justifyContent="center"
    >
    </Grid>

      </>
    );
  };

  export default ShowPage;

