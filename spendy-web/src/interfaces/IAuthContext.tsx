/**
 * AuthContextProps interface
 * @interface AuthContextProps
 * @property {boolean} isAuthenticated - A boolean value indicating whether the user is authenticated
 * @property {object} user - An object containing the user's username and email
 * @property {string} user.username - The user's username
 * @property {string} user.email - The user's email
 * @property {Function} login - A function to log in the user
 * @property {Function} logout - A function to log out the user
 */
export interface IAuthContext {
  isAuthenticated: boolean;
  user: { username: string; email: string } | null;
  login: (user: { username: string; email: string }) => void;
  logout: () => void;
}
