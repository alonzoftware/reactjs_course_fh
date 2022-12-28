# REDUX TYPESCRIPT

Carlos
1 voto
hace 4 meses
Yo también estoy haciendo el proyecto con TypeScript, mi solución basada en la respuesta de los compañeros fue la siguiente:

1. Para tener todo organizado, decidí crear un archivo de tipado dentro de la carpeta store, llamada types, que contiene el tipado del root y el dispatch de la documentación de redux-toolkit

```code
//store.types.ts
import { store } from "../store";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

2. Crear el custom hook de la función dispatch, que es el mismo que comento el compañero Shamir

```code
//hooks/index.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

3. En el archivo thunks utilice el tipado que se creó en el punto 1, para los parámetros dispatch y el getState

```code
import { AppDispatch, RootState } from "../../types";
import { startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page: number = 0) => {
  return async (dispatch: AppDispatch, getState: () => RootState) =>          {
    dispatch(startLoadingPokemon());
  };
};
```

4. Y por último en el PokemonApp se utilizan los custom hook del punto 2, eso sí me toco forzar el tipado para la función getPokemons.

```code
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon";
import { AppDispatch } from "./store/types";

...

useEffect(() => {
    dispatch(getPokemons() as AppDispatch);
  }, []);
```

Si alguien podría añadir observaciones u otra mejor forma agradecería para seguir mejorando y aprendiendo.
