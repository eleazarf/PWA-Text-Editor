// Import the openDB method from "idb" for IndexedDB interactions
import { openDB } from 'idb';

// Initialize the 'jate' IndexedDB database
const initdb = async () =>
  openDB("jate", 1, {
    // Define the database upgrade process
    upgrade(db) {
      // Check if the 'jate' database already exists
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Create the 'jate' object store with auto-incrementing keys
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// This logic and method accept content and add it to the database
export const putDb = async (content) => {
  console.log("Updating the database");

  // Create a connection to the 'jate' database with the specified version
  const textDb = await openDB("jate", 1);

  // Create a new transaction with read-write privileges for the 'jate' object store
  const tx = textDb.transaction("jate", "readwrite");

  // Access the desired object store
  const store = tx.objectStore("jate");

  // Use the .put() method on the store to add content
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);
};

// This logic and method retrieve all content from the database
export const getDb = async () => {
  console.log("Retrieving data from the database");

  // Create a connection to the 'jate' database with the specified version
  const textDb = await openDB("jate", 1);

  // Create a new transaction with read-only privileges for the 'jate' object store
  const tx = textDb.transaction("jate", "readonly");

  // Access the desired object store
  const store = tx.objectStore("jate");

  // Use the .get() method on the store to retrieve stored data
  const request = store.get(1);

  // Get confirmation of the request
  const result = await request;
  console.log("Retrieved data: result.value", result);
  return result?.value;
};

// Initialize the 'jate' IndexedDB database during script execution
initdb();
