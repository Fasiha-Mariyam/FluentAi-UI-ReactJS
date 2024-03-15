import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// slices
import partnerReducer from "./slices/partner";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  partner: partnerReducer,
});

export { rootPersistConfig, rootReducer };
