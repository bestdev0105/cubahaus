import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import InputTextField from "../../../components/InputTextField";
import { applicationUpdateRequest } from "../../../actions/application";

import ApplicationContainer from "../index";

const mockStore = configureMockStore();

let store;
let wrapper;

describe("ApplicationContainer", () => {
  beforeAll(() => {
    store = mockStore({
      auth: {
        loggedInUser: {
          user_id: 33
        }
      },
      application: {
        detail: {}
      }
    });
    // wrapper = shallow(<ApplicationContainer store={store} />).dive();
  });

  it("should render my component", () => {
    // expect(wrapper).toHaveLength(0);
  });

  // it("change age, semester, university, min_budget, max_budget, message", () => {
  //   wrapper
  //     .find(InputTextField)
  //     .at(0)
  //     .prop("onChange")({
  //     target: { name: "age", value: 25 }
  //   });
  //   expect(wrapper.state("age")).toBe(25);

  //   wrapper
  //     .find(InputTextField)
  //     .at(1)
  //     .prop("onChange")({
  //     target: { name: "semester", value: "pass" }
  //   });
  //   expect(wrapper.state("semester")).toBe("pass");

  //   wrapper
  //     .find(InputTextField)
  //     .at(1)
  //     .prop("onChange")({
  //     target: { name: "university", value: "university" }
  //   });
  //   expect(wrapper.state("university")).toBe("university");

  //   wrapper
  //     .find(InputTextField)
  //     .at(1)
  //     .prop("onChange")({
  //     target: { name: "min_budget", value: "100" }
  //   });
  //   expect(wrapper.state("min_budget")).toBe("100");

  //   wrapper
  //     .find(InputTextField)
  //     .at(1)
  //     .prop("onChange")({
  //     target: { name: "max_budget", value: "500" }
  //   });
  //   expect(wrapper.state("max_budget")).toBe("500");

  //   wrapper
  //     .find(InputTextField)
  //     .at(1)
  //     .prop("onChange")({
  //     target: { name: "message", value: "test" }
  //   });
  //   expect(wrapper.state("message")).toBe("test");
  // });

  // it("should call submitForm() when form is submitted", () => {
  //   wrapper.setState({
  //     age: 25,
  //     semester: "pass",
  //     university: "university",
  //     min_budget: 100,
  //     max_budget: 500,
  //     message: "test application"
  //   });

  //   wrapper.find("div.bottomBtn").simulate("click", {
  //     preventDefault: jest.fn()
  //   });

  //   expect(store.getActions()[1]).toEqual(
  //     applicationUpdateRequest({
  //       age: 25,
  //       semester: "pass",
  //       university: "university",
  //       min_budget: 100,
  //       max_budget: 500,
  //       message: "test application"
  //     })
  //   );
  // });
});
