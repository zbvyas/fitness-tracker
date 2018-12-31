import * as env from './../../environment_variables';

export const environment = {
  production: true,
  firebase: {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH,
    databaseURL: env.FIREBASE_DATABASE,
    projectId: "ng-fitness-tracker-85bc7",
    storageBucket: env.FIREBASE_STORAGE,
    messagingSenderId: env.FIREBASE_MESSAGE_SENDER
  }
};
