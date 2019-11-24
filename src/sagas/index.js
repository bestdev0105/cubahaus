import { all } from "redux-saga/effects";
import auth from "./auth";
import community from "./community";
import room from "./room";
import slot from "./slot";
import application from "./application";
import state from "./state";
import docs from "./docs";
import upload from "./upload";
import info from "./info";
import checkout from "./checkout";

export default function* rootSaga() {
  yield all([
    auth(),
    community(),
    room(),
    slot(),
    application(),
    state(),
    docs(),
    upload(),
    info(),
    checkout()
  ]);
}
