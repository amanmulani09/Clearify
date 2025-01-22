import "./style.css";

const clearifyBtn = document.getElementById("clearifyBtn") as HTMLButtonElement;

clearifyBtn.addEventListener("click", () => {
  let isSessionStorageSelected = (
    document.getElementById("sessionStorage") as HTMLInputElement
  ).checked;
  let isLocalStorageSelected = (
    document.getElementById("localStorage") as HTMLInputElement
  ).checked;
  let isCookiesSelected = (
    document.getElementById("cookies") as HTMLInputElement
  ).checked;
  let isIndexedDBSelected = (
    document.getElementById("indexedDB") as HTMLInputElement
  ).checked;

  console.log({
    isSessionStorageSelected,
    isLocalStorageSelected,
    isCookiesSelected,
    isIndexedDBSelected,
  });

  if (isSessionStorageSelected) {
    sessionStorage.clear();
  }
  if (isLocalStorageSelected) {
    localStorage.clear();
  }
  if (isCookiesSelected) {
    document.cookie = "";
  }
  if (isIndexedDBSelected) {
    const deleteDatabases = async () => {
      if (indexedDB.databases) {
        // List all databases for the current origin
        const databases = await indexedDB.databases();

        // Iterate over each database and delete it
        for (const dbInfo of databases) {
          const dbName = dbInfo.name;
          if (dbName) {
            console.log(`Deleting database: ${dbName}`);
            indexedDB.deleteDatabase(dbName);
          }
        }
        console.log("All databases for the current origin have been deleted.");
      } else {
        console.error(
          "indexedDB.databases() is not supported in this browser."
        );
      }
    };
    deleteDatabases();
  }
});
