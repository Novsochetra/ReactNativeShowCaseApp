import { IAuthStackParams } from './AuthStackNavigator.interface';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';

export type IModalStackNavigatorParams = {
  AuthStack: IAuthStackParams;
  MainStack: IMainStackNavigatorParams;
};
