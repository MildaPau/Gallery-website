import {
  NavigationClearRedirectAction,
  NavigationSetRedirectAction,
  NavigationActionTypes,
} from './navigation-types';

export const navigationClearRedirectAction: NavigationClearRedirectAction = {
  type: NavigationActionTypes.NAVIGATION_CLEAR_REDIRECT,
};

export const createNavigationSetRedirectAction = (redirect: string): NavigationSetRedirectAction => ({
  type: NavigationActionTypes.NAVIGATION_SET_REDIRECT,
  payload: { redirect },
});
