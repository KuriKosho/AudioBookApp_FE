import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';
import { setUserId } from 'services/client/clientService';
import clientService from 'services/client/client.service';
import { UserInfoDTO } from '../AudioUser/updateUserInfo';
import { UserInfo } from './LoginAxios';

const verifyAccountPath = "/api/v1/verify-account?email=";

export interface VerifyResponse {
    message: string;
    verify: boolean;
    token: string;
    userId:string;
    userInfo : UserInfo;
    
}

export const verifyAccount = async (email: string, otp: string): Promise<boolean> => {
    let check = false;
    try {
        const response: VerifyResponse = await axiosClient.put(verifyAccountPath + email + "&otp=" + otp);
        // Handle successful verify account response
        if (response) {
            check = response.verify;
            console.log("VERIFY ACCOUNT:", response.verify);
            if (check) {
                await tokenService.removeToken();
                await tokenService.setToken(response.token);
                await setUserId(response.userId);
                await clientService.setUserProfile(response.userInfo);
                ToastAndroid.show("Account verified successfully", ToastAndroid.SHORT);
            } else {
                Alert.alert(response.message, "Please try again", [{ text: "OK" }]);
            }
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Verify account failed');
    }
    return check;
};
