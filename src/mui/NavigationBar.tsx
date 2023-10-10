import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormDialog from "./Dialog";

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
        <Box sx={{ width: "80%" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: "20%",
            marginLeft: "auto",
            direction: "rtl",
          }}
        >
          <Tabs>
            <FormDialog />
          </Tabs>
        </Box>
      </Box>
      <Typography variant="h3" align="center">
        Please Select a Project
      </Typography>
    </Box>
  );
};

export default NavigationBar;
