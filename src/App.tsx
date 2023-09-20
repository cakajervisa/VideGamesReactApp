import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav "  " main"  `,
        lg: ` "nav nav"  "aside main"  `,
      }}
    >
      <GridItem area="nav" bg={"blue.100"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"blue.400"}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg={"blue.700"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
