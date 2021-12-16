import {
  Item,
  CustomImg,
  Date,
  Article,
  Title,
  Info,
  CustomButton,
  CustomSendIcon,
} from "./LatestBlogItemStyle";

const LatestBlogItem = ({ latestBlog }) => {
  const { title, date, desc, img } = latestBlog;
  return (
    <Item>
      <CustomImg src={img} width="420px" height="285px" />
      <Info>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Article>{desc}</Article>
        <CustomButton variant="contained" endIcon={<CustomSendIcon />}>
          Read More
        </CustomButton>
      </Info>
    </Item>
  );
};

export default LatestBlogItem;
