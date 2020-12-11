// Importa função do configureStore para crianção de interface IReducers.
import { rootReducers } from "../../configureStore";

// Interface:
export type IReducers = ReturnType<typeof rootReducers>;