// import React from 'react';
// import { Sun, Moon } from 'lucide-react';
// import { useDarkMode } from './DarkModeContext';
// import './DarkMode.css';

// const DarkModeToggle = () => {
//   const { isDark, toggleTheme } = useDarkMode();

//   return (
//     <div className="theme-toggle-container">
//       <button
//         className="theme-toggle-btn"
//         onClick={toggleTheme}
//         aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
//       >
//         <div className="toggle-icon-container">
//           {isDark ? (
//             <Sun className="toggle-icon sun-icon" size={20} />
//           ) : (
//             <Moon className="toggle-icon moon-icon" size={20} />
//           )}
//         </div>
//         <span className="toggle-text">
//           {isDark ? 'Light Mode' : 'Dark Mode'}
//         </span>
//       </button>
//     </div>
//   );
// };

// export default DarkModeToggle;


import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';
import './DarkMode.css';

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        data-mode={isDark ? 'Light Mode' : 'Dark Mode'}  // Tooltip text
      >
        <div className="toggle-icon-container">
          {isDark ? (
            <Sun className="toggle-icon sun-icon" size={20} />
          ) : (
            <Moon className="toggle-icon moon-icon" size={20} />
          )}
        </div>
        <span className="toggle-text">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
