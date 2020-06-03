import { equalsTo } from "$helpers/equalsTo";

export const idEqualsTo = (id: string) => ({ id: equalsTo(id) })