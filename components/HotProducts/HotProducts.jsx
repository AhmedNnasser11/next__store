import Layout from "../Layout/Layout";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { CustomContainer, TabContainer } from "./HotProductsStyle";
import ProductItem from "../ProductItem/ProductItem";

const HotProducts = ({ products }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout
      title="Hot Products"
      desc="See What Everyone Is Shopping from Andshop E-Commerce"
    >
      <CustomContainer>
        <TabContext value={value}>
          <TabContainer>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="lab API tabs example"
              >
                <Tab label="New Arrival" value="1" />
                <Tab label="Trending" value="2" />
                <Tab label="Best Sellers" value="3" />
                <Tab label="Featured" value="4" />
                <Tab label="On sall" value="5" />
              </Tabs>
            </Box>
            <Box>
              <TabPanel value="1">
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={2}>
                  {products.slice(0, 2).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Grid container spacing={2}>
                  {products.slice(2, 4).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="4">
                <Grid container spacing={2}>
                  {products.slice(0, 3).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="5">
                <Grid container spacing={2}>
                  {products.slice(1, 4).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                      <ProductItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </TabContainer>
        </TabContext>
      </CustomContainer>
    </Layout>
  );
};

export default HotProducts;
