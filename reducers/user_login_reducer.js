import { User_login } from '../actions/types';

const initialState = {
    userdata: []
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case User_login:
            return {              
                userData: state.userdata.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
}

export default loginReducer;