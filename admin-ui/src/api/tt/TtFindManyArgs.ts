import { TtWhereInput } from "./TtWhereInput";
import { TtOrderByInput } from "./TtOrderByInput";

export type TtFindManyArgs = {
  where?: TtWhereInput;
  orderBy?: Array<TtOrderByInput>;
  skip?: number;
  take?: number;
};
