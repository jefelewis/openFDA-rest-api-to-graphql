// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key



// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getMedicalDevice501KClearances: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/510k.json?`);
      return response.json();
    },
    getMedicalDeviceClassification: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/classification.json?`);
      return response.json();
    },
    getMedicalDeviceRecallEnforcementReports: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/enforcement.json?`);
      return response.json();
    },
    getMedicalDeviceAdverseEventReports: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/event.json?`);
      return response.json();
    },
    getMedicalDevicePremarketApproval: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/pma.json?`);
      return response.json();
    },
    getMedicalDeviceRecalls: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/recall.json?`);
      return response.json();
    },
    getMedicalDeviceRegistrationsAndListings: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/registrationlisting.json?`);
      return response.json();
    },
    getMedicalDeviceUniqueDeviceIdentifier: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/device/udi.json?`);
      return response.json();
    },
    getDrugRecallEnforcementReports: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/drug/enforcement.json?`);
      return response.json();
    },
    getDrugAdverseEvents: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/drug/event.json?`);
      return response.json();
    },
    getDrugProductLabeling: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/drug/label.json?`);
      return response.json();
    },
    getFoodRecallEnforcementReports: async (parent, args) => {
      const response = await
      fetch(`https://api.fda.gov/food/enforcement.json?`);
      return response.json();
    },
    getFoodCAERSReports: async (parent, args) => {
      const response = await
      fetch(``);
      return response.json();
    },
    getOtherNSDE: async (parent, args) => {
      const response = await
      fetch(`api.fda.gov/other/nsde`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;