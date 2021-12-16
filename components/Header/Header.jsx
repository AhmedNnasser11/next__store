import {
  CustomButton,
  CustomContainer,
  CustomImage,
  CustomMain,
  HeaderSection,
} from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderSection>
      <CustomContainer>
        <CustomMain>
          <h1>
            Live For <span>Fashion</span>
          </h1>
          <span>Save Up To 50%</span>
          <CustomButton variant="contained">Shop now</CustomButton>
        </CustomMain>
        <CustomImage width="700px" height="800px" src="/imgs/3.png" alt="" />
      </CustomContainer>
    </HeaderSection>
  );
};

export default Header;
