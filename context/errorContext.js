const { createContext, useState } = require("react");

export const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState();

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContextProvider;
