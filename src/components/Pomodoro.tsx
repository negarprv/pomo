import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pomodoro-tabpanel-${index}`}
      aria-labelledby={`pomodoro-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `pomodoro-tab-${index}`,
    "aria-controls": `pomodoro-tabpanel-${index}`,
  };
}

export default function Pomodoro() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        bgcolor: grey[800],
        borderRadius: "10px",
        px: 5,
        py: 2,
        my: 5,
        width: "80%",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="pomodoro tabs">
          <Tab
            sx={{ textTransform: "none" }}
            label="Pomodoro"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="Short Break"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="Long Break"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <Box>
        <CustomTabPanel value={value} index={0}>
          Pmodoro
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Short Break
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Long Break
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
