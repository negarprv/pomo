import { Container, CssBaseline, Paper, Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Paper elevation={3}>
          <Stack sx={{ p: 3 }}>
            <Header />
            {/* <Pomodoro />
        <Tasks />
        <Overview /> */}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default App;
