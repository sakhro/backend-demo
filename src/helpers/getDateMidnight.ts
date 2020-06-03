import dayjs from "dayjs";

function getDateMidnight(date: Date | string) {
  const offset = dayjs(date).utcOffset();
  const midnight = dayjs(date)
    .startOf("day")
    .add(offset, "minute");

  return midnight.toISOString();
}

export {
  getDateMidnight,
};
