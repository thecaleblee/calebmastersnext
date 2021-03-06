import React from "react";
import { describe, it } from "@jest/globals";
import { shallow } from "enzyme";
import Href from "../components/Href";

describe("<Href />", () => {
  it("Should render without props", () => {
    const wrapper = shallow(<Href />);

    expect(wrapper.contains(<a aria-label="" href="/" tabIndex={0} />)).toBe(
      true
    );
  });
  it("Should update the href to '/tests'", () => {
    const wrapper = shallow(<Href href={`/test`} />);

    expect(
      wrapper.contains(<a aria-label="" href="/test" tabIndex={0} />)
    ).toBe(true);
  });
  it("Should update the Aria Label to 'Test Link'", () => {
    const wrapper = shallow(<Href al={`Test Link`} />);

    expect(
      wrapper.contains(<a aria-label="Test Link" href="/" tabIndex={0} />)
    ).toBe(true);
  });
  it("Should include the classes'test class'", () => {
    const wrapper = shallow(<Href addClass={`test class`} />);

    expect(wrapper.find(".test").length).toBe(1);
  });
  it("Should switch to link anchoring when 'samePage' is passed in", () => {
    const wrapper = shallow(<Href samePage />);

    expect(wrapper.contains(<a aria-label="" href="/test" />)).toBe(false);
    expect(wrapper.children().props()).toHaveProperty("smooth", true);
  });
  it("Should render child elements like <p>test child</p>", () => {
    const wrapper = shallow(
      <Href>
        <p>test child</p>
      </Href>
    );

    expect(wrapper.contains(<p>test child</p>)).toBe(true);
  });
  it("Snapshot of normal link should match", () => {
    const component = shallow(<Href samePage={false} />);
    expect(component).toMatchSnapshot();
  });
  it("Snapshot of samePage link should match", () => {
    const component = shallow(<Href samePage={true} />);
    expect(component).toMatchSnapshot();
  });
});
