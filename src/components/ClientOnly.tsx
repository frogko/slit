import { useEffect, useState } from "react";

export const ClientOnly = ({ children }: { children: React.ReactElement }) => {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return children;
};

export const useClientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
