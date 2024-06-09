import registrationReducer, {
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError
} from './registration.reducer';

import loginReducer, {
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin,
    getUserApi
} from './login.reducer';

import eventReducer,{
    actionPageIsLoadingEvent,
    actionEventSuccess,
    actionEventError,
    actionMessageEventError,
    actionEventData,
    EventState,
    actionChangeEvent,
    actionDeleteEvent,
    actionUnregisterEvent,
    actionGetOneEventData,

} from './event.reducer';


export {
    registrationReducer,
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError,
    loginReducer,
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin,
    getUserApi,
    eventReducer,
    actionPageIsLoadingEvent,
    actionEventSuccess,
    actionEventError,
    actionMessageEventError,
    actionEventData,
    EventState,
    actionChangeEvent,
    actionDeleteEvent,
    actionUnregisterEvent,
    actionGetOneEventData,

};
