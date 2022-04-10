export const saveRecords = (array, tweets) => {
  const arrayObject = {};
  array.forEach(
    (record) => (arrayObject[record.id] = { ...record, tweets: tweets })
  );
  chrome.storage.sync.set(arrayObject);
};

export const removeRecords = (array) => {
  chrome.storage.sync.remove(array);
};

export const processRecordsObjectIntoArray = (records) => {
  const recordsArray = [];
  Object.keys(records).forEach((key) => {
    recordsArray.push(records[key]);
  });
  return recordsArray;
};

export const processRecordsArrayIntoObject = (recordsArray) => {
  const recordsObject = {};
  recordsArray.forEach((record) => {
    recordsObject[record.id] = record;
  });
  return recordsObject;
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (users) => {
      const usersArray = processRecordsObjectIntoArray(users);
      resolve(usersArray);
    });
  });
};
