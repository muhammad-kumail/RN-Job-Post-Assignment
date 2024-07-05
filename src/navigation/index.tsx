import 'react-native-gesture-handler';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  RouteProp,
  StackActions,
} from '@react-navigation/native';
import {LogBox} from 'react-native';
import JobDetail from '../screens/JobDetail';
LogBox.ignoreLogs([
  'Found screens with the same name nested inside one another.',
  'Warning: AnimatableImage: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
  'Warning: Failed prop type: Invalid prop `isVisible` of type `string` supplied to `ReactNativeModal`, expected `boolean`.',
]);
type RootStackParamList = {
  JobDetail: undefined;
};
//Generic type defination of screens props
export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="JobDetail" component={JobDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
