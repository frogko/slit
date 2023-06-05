const tabParamsArrayGenerator = (tabs) => {
  const routes = [];

  tabs.forEach((tab) => {
    if (tab.subKey) {
      tab.subKey.forEach((sKey) => {
        routes.push({
          params: {
            activeTab: [tab.key, sKey],
          },
        });
      });
    }

    routes.push({
      params: {
        activeTab: [tab.key],
      },
    });
  });

  return routes;
};

export default tabParamsArrayGenerator;
