const {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL} = require("../constants/userConstants");

function userSigninReducer (state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return {laoding: false, userInfo: action.payload};
        default:
            return state;
    }
}

export {userSigninReducer};