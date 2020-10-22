import React from "react";
import { Grid } from "@material-ui/core";

function HomePage() {
  return (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >

    <Grid item xs={3}>
      <p>Bienvenue dans l'ère couvre-feu.</p>
    </Grid>   

  </Grid>
  )
}

export { HomePage as default, HomePage };
