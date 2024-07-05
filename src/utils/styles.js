// File for global styles which will use more than one screen or components
import {StyleSheet} from 'react-native';
import theme, {scale} from '../theme';

export const Gstyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(15),
    backgroundColor: theme.colors.white,
  },
});
