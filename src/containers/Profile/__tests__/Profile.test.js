import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import ProfilePage from "../index";

const profileGetRequest = jest.fn();
const auth = {
  loggedInUser: { user: "admin" }
};
const user = {
  first_name: "test",
  last_name: "test"
};

const history = {
  goBack: jest.fn(),
  push: jest.fn()
};

const mockStore = configureMockStore();
let store;

describe("ProfilePage", () => {
  beforeEach(() => {
    profileGetRequest.mockClear();
    history.goBack.mockClear();
    store = mockStore({
      auth: {
        error: null
      }
    });
  });

  it("should render component without problem", () => {
    const wrapper = shallow(
      <ProfilePage
        store={store}
        user={user}
        profileGetRequest={profileGetRequest}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
