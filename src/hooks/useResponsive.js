import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width } = useWindowDimensions();

  return {
    isSmallScreen: width <= 375, // iPhone SE 2~3세대
    isMediumScreen: width > 375 && width <= 430, //iPhone 13, 14, 14 Pro
    isLargeScreen: width > 430, //iPhone Pro Max
  };
};
