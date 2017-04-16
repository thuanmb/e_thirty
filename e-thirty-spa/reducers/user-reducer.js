export const LOGGED_IN = 'LOGGED_IN';

const userReducer = (state = { authenticated: false, user: { email: 'buimthuan@gmail.com' } }, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        authenticated: action.user ? action.user : false,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
