import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/LoginReducer";
import {profileReducer} from "./reducers/ProfileReducer";
import {registrationReducer} from "./reducers/RegistrationReducer";
import {passwordRecoveryReducer} from "./reducers/PasswordRecoveryReducer";
import {enteringNewPasswordReducer} from "./reducers/EnteringNewPasswordReducer";
import {packsReducer} from "./reducers/PacksReducer";
import {cardsReducer} from "./reducers/CardsReducer";
import {usersReducer} from "./reducers/UsersReducer";
import {authReducer} from "./reducers/AuthReducer";
import {gradeReducer} from "./reducers/GradeReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringNewPassword: enteringNewPasswordReducer,
    packs: packsReducer,
    cards: cardsReducer,
    users: usersReducer,
    auth: authReducer,
    grade: gradeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type appRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store