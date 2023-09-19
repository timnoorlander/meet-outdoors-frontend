import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { Activity } from "../../../types";
dayjs.extend(isBetween);

export const isActivityCurrentlyHappening = (activity: Activity) =>
  dayjs().isBetween(dayjs(activity.startTime), dayjs(activity.endTime));
