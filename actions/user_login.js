import { User_login } from './types';

export const user_login_data = userdata => {
    return {
        type: User_login,
        payload: userdata
    }
}