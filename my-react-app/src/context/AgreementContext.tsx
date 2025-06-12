import React, { createContext, useContext, useState } from 'react';

interface AgreementContextType {
  isAllChecked: boolean;
  setIsAllChecked: (value: boolean) => void;
  showError: boolean;
  setShowError: (value: boolean) => void;
}

const AgreementContext = createContext<AgreementContextType | undefined>(undefined);

export function AgreementProvider({ children }: { children: React.ReactNode }) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <AgreementContext.Provider value={{ isAllChecked, setIsAllChecked, showError, setShowError }}>
      {children}
    </AgreementContext.Provider>
  );
}

export function useAgreement() {
  const context = useContext(AgreementContext);
  if (context === undefined) {
    throw new Error('useAgreement must be used within an AgreementProvider');
  }
  return context;
} 