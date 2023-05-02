import { hotjar } from "react-hotjar";

/**
 *
 * @param {*} stateChange  '/my/page'
 */
export const useHotjar = (stateChange) => {
 hotjar.initialize(hjid, hjsv);

 // Identify the user
 hotjar.identify("3474066", { userProperty: "value" });

 // Add an event
 hotjar.event("button-click");

 // Update SPA state
 hotjar.stateChange(stateChange);

 // Check if Hotjar has been initialized before calling its methods
 if (hotjar.initialized()) {
  hotjar.identify("3474066", { userProperty: "value" });
 }
};
