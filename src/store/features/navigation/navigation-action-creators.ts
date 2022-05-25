import {
  NavigationActionTypes,
  NavigationAction,
} from './navigation-types';

export const navigationClearRedirectAction: NavigationAction = {
  type: NavigationActionTypes.NAVIGATION_CLEAR_REDIRECT,
};

export const createNavigationSetRedirectAction = (redirect: string): NavigationAction => ({
  type: NavigationActionTypes.NAVIGATION_SET_REDIRECT,
  payload: { redirect },
});
