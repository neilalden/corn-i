import { WhereFilterOp } from "firebase/firestore";

export type whereQueryType = {
    arg1: string;
    arg2: WhereFilterOp;
    arg3: string | number | boolean;
}  