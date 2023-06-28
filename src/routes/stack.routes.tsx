import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/screenA'; 
import { ScreenB } from '../screens/screenB'; 

export function StackRoutes() {
    return(
        <Navigator>
            <Screen
                name = 'screenA'
                component={ScreenA}
                options={{
                    title: 'Home',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: '#50D9D9'
                    },
                    headerTintColor: '#215959'
                }}
            />
            <Screen
                name = 'screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: '#215959'
                    },
                headerTintColor: '#50D9D9'
                }}
            />
        </Navigator>
    )

}