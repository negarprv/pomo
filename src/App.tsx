import { Container, CssBaseline, Paper, Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Paper elevation={3}>
          <Stack sx={{ p: 5 }}>
            <Header />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pomodoro />
            </div>
            {/* <Tasks />
        <Overview />  */}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default App;
