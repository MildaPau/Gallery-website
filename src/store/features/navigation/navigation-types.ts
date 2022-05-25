export type NavigationState = {
  redirect: string | null;
};

export enum NavigationActionTypes {
  NAVIGATION_CLEAR_REDIRECT = 'NAVIGATION_CLEAR_REDIRECT',
  NAVIGATION_SET_REDIRECT = 'NAVIGATION_SET_REDIRECT',
}

export type NavigationClearRedirectAction = {
  type: NavigationActionTypes.NAVIGATION_CLEAR_REDIRECT,
};

export type NavigationSetRedirectAction = {
  type: NavigationActionTypes.NAVIGATION_SET_REDIRECT,
  payload: {
    redirect: string
  }
};

export type NavigationAction = NavigationClearRedirectAction | NavigationSetRedirectAction;
