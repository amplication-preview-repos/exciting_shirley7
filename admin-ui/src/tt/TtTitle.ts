import { Tt as TTt } from "../api/tt/Tt";

export const TT_TITLE_FIELD = "id";

export const TtTitle = (record: TTt): string => {
  return record.id || String(record.id);
};
