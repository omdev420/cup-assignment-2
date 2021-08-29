import { useReducer, useEffect } from 'react';

function heroesReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.id];
    }

    case 'REMOVE': {
      return prevState.filter(id => id !== action.id);
    }

    default:
      return prevState;
  }
}
function usePresistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    inital => {
      const persisted = localStorage.getItem(key);

      return persisted ? JSON.parse(persisted) : inital;
    }
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
}

export function useHeroes(key = 'heroes') {
  return usePresistedReducer(heroesReducer, [], key);
}
