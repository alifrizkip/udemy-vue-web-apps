import * as types from './mutation-types';

export const signIn = ({commit}, userPayload) => {
  commit(types.SIGN_IN, userPayload);
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT);
}

export const setEvents = ({commit}, eventsPayload) => {
  commit(types.SET_EVENTS, eventsPayload);
}