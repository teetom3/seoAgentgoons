// context/TokenContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

interface TokenContextType {
  tokens: number | null;
  refreshTokens: () => Promise<void>;
}

const TokenContext = createContext<TokenContextType>({
  tokens: null,
  refreshTokens: async () => {},
});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [tokens, setTokens] = useState<number | null>(null);

  const fetchTokens = async () => {
    try {
      const res = await fetch("/api/user/tokens");
      const data = await res.json();
      if (res.ok) {
        setTokens(data.tokens);
      }
    } catch (err) {
      console.error("Erreur fetch tokens", err);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  return (
    <TokenContext.Provider value={{ tokens, refreshTokens: fetchTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
