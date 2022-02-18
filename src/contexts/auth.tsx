import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback
} from 'react';
import { Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { IUserProps } from '../@types/user';
import { IAuthProps, IAuthResponse } from './auth.d';
import { getDataUser } from '../services/api';

const AuthContext = createContext<IAuthProps>({} as IAuthProps);

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const RESPONSE_TYPE = 'token';
const SCOPE = encodeURI('profile email');

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUserProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStorageData = async () => {
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async () => {
        try {
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as IAuthResponse;

            if (type === 'success') {
                const response = await getDataUser(params.access_token);

                const dataUser = {
                    name: response?.data.name,
                    email: response?.data.email,
                    family_name: response?.data.family_name,
                    given_name: response?.data.given_name,
                    locale: response?.data.locale,
                    picture: response?.data.picture,
                }

                await AsyncStorage.setItem('@payments:token', params.access_token);
                await AsyncStorage.setItem('@payments:user', JSON.stringify(response?.data));
                setUser(dataUser);

                axios.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;
            }

            return;
        } catch (err) {
            return Alert.alert("Ops", "Houve uma falha. Tente novamente mais tarde.")
        }
    }, []);

    const signOut = () => {
        AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                setUser,
                signIn,
                signOut,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthProps => useContext(AuthContext);

export { useAuth, AuthProvider }
