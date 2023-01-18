import { BoxStyles } from "./theming/boxStyles";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Helvetica",
    heading: "Helvetica",
    text: "Open Sans",
  },
  components: {
    Button: {
      variants: {
        social: {
          rounded: "full",
          border: "1px solid whiteAlpha.800",
          _hover: {
            border: "1px solid green",
            bg: "green.100",
          },
          fontFamily: "Helvetica",
        },
      },
    },
  },
  layerStyles: {
    BoxStyles,
  },
});

export default theme;
