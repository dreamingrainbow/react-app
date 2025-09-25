import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

import { appThemeSelector, setTheme } from '../store/app';

export const useTheme = () => {
  const theme = useSelector(appThemeSelector);
  // console.log('theme-', theme);
  const muiTheme = responsiveFontSizes(createTheme(theme));
  // console.log('mui-theme-', muiTheme);
  const dispatch = useDispatch();
  return { theme: muiTheme, setTheme: (theme) => dispatch(setTheme(theme)) };
};

export default useTheme;
