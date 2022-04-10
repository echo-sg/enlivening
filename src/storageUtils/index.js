export const saveRecords = (array, type) => {
  const arrayObject = {};
  array.forEach((record) => (arrayObject[record.id] = { ...record, type }));
  chrome.storage.sync.set(arrayObject);
};

export const removeRecords = (array) => {
  chrome.storage.sync.remove(array);
};

export const getAllTweets = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (tweets) => {
      resolve(tweets);
    });
  });
};
