import * as React from "react";
// material
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Zoom from "@mui/material/Zoom";
import { Button, Box } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

// components
import RootStyled from "./styled";
import {
  ProfileForm,
  CurrentPlan,
  PaymentMethod,
  ChangePassword,
} from "components";

export default function SettingsTabs({ isLoading }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyled>
      <Box className="subscription-btn">
        <Button variant="text" startIcon={<ArrowBackIosNewRoundedIcon />}>
          Settings Page
        </Button>
      </Box>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Profile" value={0} />
          <Tab label="Plans" value={1} />
          <Tab label="Payment Method" value={2} />
          <Tab label="Change Paasword" value={3} />
        </TabList>
        <TabPanel value={0}>
          <Zoom in={value === 0}>
            <div>
              <ProfileForm />
            </div>
          </Zoom>
        </TabPanel>
        <TabPanel value={1}>
          <Zoom in={value}>
            <div>
              <CurrentPlan />
            </div>
          </Zoom>
        </TabPanel>
        <TabPanel value={2}>
          <Zoom in={value}>
            <div>
              <PaymentMethod />
            </div>
          </Zoom>
        </TabPanel>
        <TabPanel value={3}>
          <Zoom in={value}>
            <div>
              <ChangePassword />
            </div>
          </Zoom>
        </TabPanel>
      </TabContext>
    </RootStyled>
  );
}
