import React, { useState } from "react";
import Header from "../headerMovieList";
import ShowList from "../showList";
import Grid from "@mui/material/Grid";

function ShowListPageTemplate({ shows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

 

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
         
        </Grid>
        <ShowList action={action} shows={shows}></ShowList>
      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;