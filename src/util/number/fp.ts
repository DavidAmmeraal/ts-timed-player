import { curry, flip } from 'ramda';
import * as numberUtils from './number';

export const formatToTimerTime = curry(flip(numberUtils.formatToTimerTime));