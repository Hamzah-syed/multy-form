export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload]
      }

    default:
      return state;
  }
};
