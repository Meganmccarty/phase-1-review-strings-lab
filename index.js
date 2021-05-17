// Write your code in this file!

const currentUser = 'Megan McCarty';

// Concatenation
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// Interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;