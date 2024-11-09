import { id, init, tx } from "@instantdb/react";

const APP_ID = import.meta.env.VITE_INSTANT_DB_APP_ID;

export const db = init({ appId: APP_ID });
