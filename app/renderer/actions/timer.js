// @flow
import type {
  TimerAction,
} from 'types';

import * as types from './actionTypes';


export const tick = (second = 1): TimerAction => ({
  type: types.TICK,
  payload: second,
  scope: 'allRenderer',
});

export const startTimer = (): TimerAction => ({
  type: types.START_TIMER,
  scope: 1,
});

export const stopTimer = (): TimerAction => ({
  type: types.STOP_TIMER,
});

export const continueTimer = (): TimerAction => ({
  type: types.CONTINUE_TIMER,
});

export const setTime = (payload): TimerAction => ({
  type: types.SET_TIME,
  payload,
});

export const stopTimerRequest = (closeRequest = false): TimerAction => ({
  type: types.STOP_TIMER_REQUEST,
  closeRequest,
  scope: 1,
});

export const setIdleState = (
  payload: boolean,
): TimerAction => ({
  type: types.SET_IDLE_STATE,
  payload,
});

export const resetTimer = (): TimerAction => ({
  type: types.RESET_TIMER,
});

export const keepIdleTime = (
  payload: any,
): TimerAction => ({
  type: types.KEEP_IDLE_TIME,
  payload,
  scope: 'allRenderer',
});

export const dismissIdleTime = (
  payload: number,
): TimerAction => ({
  type: types.DISMISS_IDLE_TIME,
  payload,
  scope: 'allRenderer',
});
