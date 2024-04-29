import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3000/assets/adv.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Travel with us</Typography>
        <Typography color={medium}>travelwithus.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam
        obcaecati, eligendi molestiae dignissimos repellat ipsum iure amet,
        porro soluta, quas recusandae quidem mollitia quam placeat. Est veniam
        corporis id ipsa, beatae velit atque sint architecto. Saepe quia hic
        error odit deleniti repellendus, autem omnis labore est non at dolores!
      </Typography>
    </WidgetWrapper>
  );
};


export default AdvertWidget;