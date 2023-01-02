import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ movie, children }) => {
  


  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
           
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
    