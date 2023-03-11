import * as React from "react";
// material
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Zoom from "@mui/material/Zoom";
// components
import {
  MyProduct,
  OulyTabSection,
  Plagify,
  ProductInformation,
} from "components";
import RootStyled from "./styled";
export default function Home({ isLoading }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyled>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Ouly" value={0} />
          <Tab label="Plagify" value={1} />
          <Tab label="My product" value={2} />
        </TabList>
        <TabPanel value={0}>
          <Zoom in={value === 0}>
            <div>
              <OulyTabSection />
            </div>
          </Zoom>
        </TabPanel>
        <TabPanel value={1}>
          <Zoom in={value}>
            <div>
              <Plagify />
            </div>
          </Zoom>
        </TabPanel>
        <TabPanel value={2}>
          <Zoom in={value}>
            <div>
              <MyProduct isLoading={isLoading} />
            </div>
          </Zoom>
        </TabPanel>
      </TabContext>
    </RootStyled>
  );
}
