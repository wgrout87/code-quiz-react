import React, { createContext, useContext } from "react";
import { useSiteReducer } from "./reducers";
import { defaultSettings } from "./defaultSettings";

const SiteContext = createContext();
const { Provider } = SiteContext;

const SiteProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useSiteReducer(defaultSettings);

    return <Provider value={[state, dispatch]} {...props} />;
}

const useSiteContext = () => {
    return useContext(SiteContext);
};

export { SiteProvider, useSiteContext };