import * as types from './mutation-types.js'
// * setToken
export const setToken = (token) => ({
    type: types.SET_TOKEN,
    token
});
// * setTheme
export const setTheme = (theme) => ({
    type: types.SET_THEME,
    theme
});
