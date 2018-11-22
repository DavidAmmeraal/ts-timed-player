/* eslint-disable import/no-extraneous-dependencies */
// Global/Window object Stubs for Jest
window.matchMedia = window.matchMedia
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

window.requestAnimationFrame = function (callback) {
  setTimeout(callback);
};

window.localStorage = {
  getItem() {},
  setItem() {},
};

Object.values = () => [];

process.env = {};
global.fetch = require('jest-fetch-mock');
