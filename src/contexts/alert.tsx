/* eslint-disable no-unused-vars */
/* eslint-disable no-spaced-func */
/* eslint-disable func-call-spacing */

import { Alert } from '@/components/Global/Alert';
import React, { useState, useContext, createContext } from 'react';

const AlertContext = createContext<{
  displayAlert: (message: string) => void;
}>({} as { displayAlert: (message: string) => void });

export function AlertProvider({ children }: any) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  function displayAlert(message: string) {
    clearTimeout(timeoutId);
    setShowAlert(true);
    setAlertMessage(message);

    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    setTimeoutId(timeout);
  }

  return (
    <AlertContext.Provider value={{ displayAlert }}>
      {showAlert && (
        <Alert message={alertMessage} setShowAlert={setShowAlert} />
      )}

      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  return useContext(AlertContext);
};
