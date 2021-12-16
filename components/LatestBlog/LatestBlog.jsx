import Layout from "../Layout/Layout";
import { CustomContainer } from "./LatestBlogStyle";
import { Grid } from "@mui/material";
import LatestBlogItem from "../LatestBlogItem/LatestBlogItem"

const LatestBlog = ({latestBlog}) => {
  return (
    <Layout
      title="Latest Blog"
      desc="Mauris luctus nisi sapien tristique dignissim ornare"
    >
      <CustomContainer>
        <Grid container spacing={2}>
        {
          latestBlog.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <LatestBlogItem latestBlog={item}/>
            </Grid>
          ))
        }
        </Grid>
      </CustomContainer>
    </Layout>
  );
};

export default LatestBlog;
