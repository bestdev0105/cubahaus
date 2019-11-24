import { status } from "../constants/user_status";

import Application from "../containers/Application";
import Community from "../containers/Community";
import CommunityDetail from "../containers/CommunityDetail";
import RoomDetail from "../containers/RoomDetail";
import Schedule from "../containers/Schedule";
import WishList from "../containers/WishList";
import Final from "../containers/Final";
import CheckoutPreview from "../containers/CheckoutPreview";
import ArrivalInfo from "../containers/ArrivalInfo";
import Contract from "../containers/Contract";

const routes = [
  {
    key: status.init,
    path: "form",
    component: Application
  },
  {
    key: status.applied,
    path: "community",
    component: Community
  },
  {
    key: status.interested,
    path: "schedule",
    component: Schedule
    // component: Final
  },
  {
    key: status.interviewed,
    path: "wishlist",
    component: WishList
  },
  {
    key: status.roomPreviewed,
    path: "lease",
    component: Contract
  },
  {
    key: status.booked,
    path: "final",
    component: Final
  },
  {
    key: status.info,
    path: "info",
    component: ArrivalInfo
  },
  {
    path: "wishlist/checkout/preview",
    component: CheckoutPreview
  },
  {
    path: "community/:id",
    component: CommunityDetail
  },
  {
    path: "rooms/:id",
    component: RoomDetail
  }
];

export default routes;
