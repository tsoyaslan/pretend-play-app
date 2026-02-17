import { useState, useCallback, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
          // Reading from external store on mount — legitimate effect usage
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setFavorites(parsed);
        }
      }
    } catch {
      // corrupted or unavailable localStorage, start fresh
    }
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];

      try {
        localStorage.setItem("favorites", JSON.stringify(updated));
      } catch {
        // localStorage unavailable, state still updates
      }
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}
