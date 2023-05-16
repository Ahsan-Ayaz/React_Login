let inactivityTimeout;

// Function to remove item from localStorage
const removeItemFromLocalStorage = () => {
  localStorage.removeItem('authorized');
  // Add any additional cleanup logic you may need
};

// Function to start the inactivity timer
const startInactivityTimer = () => {
  inactivityTimeout = setTimeout(removeItemFromLocalStorage, 10 * 60 * 1000); // 10 minutes
};

// Function to reset the inactivity timer
const resetInactivityTimer = () => {
  clearTimeout(inactivityTimeout);
  startInactivityTimer();
};

// Event listener for user activity
const handleUserActivity = () => {
  resetInactivityTimer();
};

// Add event listeners to relevant elements (e.g., document, window, specific DOM elements)
document.addEventListener('mousemove', handleUserActivity);
document.addEventListener('keydown', handleUserActivity);
// Add other event listeners as needed for your specific use case

// Start the inactivity timer initially
startInactivityTimer();