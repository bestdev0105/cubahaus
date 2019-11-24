import { statusList } from "../constants/user_status";

export function shouldUpdateStatus(curStatus, selectedStatus) {
  const curStatusInd = statusList.indexOf(curStatus);
  const selectedStatusInd = statusList.indexOf(selectedStatus);

  return selectedStatusInd === curStatusInd;
}