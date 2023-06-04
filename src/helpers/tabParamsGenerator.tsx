const tabParamsGenerator = (tabs) =>
  tabs.map((tab) => ({
    params: {
      activeTab: tab.key,
    },
  }));

export default tabParamsGenerator;
