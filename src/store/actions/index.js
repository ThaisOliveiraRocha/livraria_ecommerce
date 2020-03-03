import { CLICK_UPDATE_VALUE } from '../../constants/actionTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});