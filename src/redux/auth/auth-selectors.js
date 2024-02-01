const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsAdmin = (state) => state.auth.isAdmin;

const authSelectors = {
  getIsLoggedIn,
  getIsAdmin,
};

export default authSelectors;
