import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import Paginator from "../Paginator";

/** this component should render a paginator:
 *  - render paginator properties:
 *      - totalPages: int // number of total pages in the paginator
 *      - selectedPage: int // actual selected page
 *      - clickOnPage: function   // function that is triggered when a page is clicks, in param number of page clicked
 */

const multiplePagesProps = {
  totalPages: 10,
  selectedPage: 2,
  clickOnPage: jest.fn(),
};

describe("Paginator Component tests", () => {
  it("render Paginator Snapshot", () => {
    const tree = renderer
      .create(<Paginator {...multiplePagesProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Default Paginator renders correctly", () => {
    const { getByTestId } = render(<Paginator {...multiplePagesProps} />);
    const paginatorContainer = getByTestId("paginator-container");
    expect(paginatorContainer.children.length).toEqual(1);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    expect(paginatorInnerContainer.children.length).toEqual(1 + 3 + 1);
    const previous = paginatorInnerContainer.children[0];
    expect(previous.nodeName).toBe("BUTTON");
    expect(previous.innerHTML).toBe("prev");
    const page1 = paginatorInnerContainer.children[1];
    expect(page1.nodeName).toBe("BUTTON");
    expect(page1.innerHTML).toBe("1");
    const page2 = paginatorInnerContainer.children[2];
    expect(page2.nodeName).toBe("BUTTON");
    expect(page2.innerHTML).toBe("2");
    const page10 = paginatorInnerContainer.children[3];
    expect(page10.nodeName).toBe("BUTTON");
    expect(page10.innerHTML).toBe("10");
    const next = paginatorInnerContainer.children[4];
    expect(next.nodeName).toBe("BUTTON");
    expect(next.innerHTML).toBe("next");
  });

  it("middle page selected", () => {
    const props = {
      totalPages: 10,
      selectedPage: 5,
      clickOnPage: () => {},
    };
    const { getByTestId } = render(<Paginator {...props} />);
    const paginatorContainer = getByTestId("paginator-container");
    expect(paginatorContainer.children.length).toEqual(1);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    expect(paginatorInnerContainer.children.length).toEqual(1 + 3 + 1);
    const page1 = paginatorInnerContainer.children[1];
    expect(page1.nodeName).toBe("BUTTON");
    expect(page1.innerHTML).toBe("1");
    const page5 = paginatorInnerContainer.children[2];
    expect(page5.nodeName).toBe("BUTTON");
    expect(page5.innerHTML).toBe("5");
    const page10 = paginatorInnerContainer.children[3];
    expect(page10.nodeName).toBe("BUTTON");
    expect(page10.innerHTML).toBe("10");
    const next = paginatorInnerContainer.children[4];
    expect(next.nodeName).toBe("BUTTON");
    expect(next.innerHTML).toBe("next");
  });

  it("Paginator 2 pages", () => {
    const props = {
      totalPages: 2,
      selectedPage: 1,
      clickOnPage: () => {},
    };

    const { getByTestId } = render(<Paginator {...props} />);
    const paginatorContainer = getByTestId("paginator-container");
    expect(paginatorContainer.children.length).toEqual(1);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    expect(paginatorInnerContainer.children.length).toEqual(1 + 2 + 1);
    const page1 = paginatorInnerContainer.children[1];
    expect(page1.nodeName).toBe("BUTTON");
    expect(page1.innerHTML).toBe("1");
    const page2 = paginatorInnerContainer.children[2];
    expect(page2.nodeName).toBe("BUTTON");
    expect(page2.innerHTML).toBe("2");
  });

  it("try to click prev when you are in page 1", () => {
    const props = {
      totalPages: 10,
      selectedPage: 1,
      clickOnPage: jest.fn(),
    };
    const { getByTestId } = render(<Paginator {...props} />);
    expect(props.clickOnPage).toHaveBeenCalledTimes(0);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    const previous = paginatorInnerContainer.children[0];
    fireEvent.click(previous);
    expect(props.clickOnPage).toHaveBeenCalledTimes(0);
  });

  it("try to click next when you are in last page", () => {
    const props = {
      totalPages: 10,
      selectedPage: 10,
      clickOnPage: jest.fn(),
    };
    const { getByTestId } = render(<Paginator {...props} />);
    expect(props.clickOnPage).toHaveBeenCalledTimes(0);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    const next = paginatorInnerContainer.children[4];
    fireEvent.click(next);
    expect(props.clickOnPage).toHaveBeenCalledTimes(0);
  });

  it("click on pages", () => {
    const props = {
      totalPages: 10,
      selectedPage: 5,
      clickOnPage: jest.fn(),
    };
    const { getByTestId } = render(<Paginator {...props} />);
    expect(multiplePagesProps.clickOnPage).toHaveBeenCalledTimes(0);
    const paginatorInnerContainer = getByTestId("paginator-inner-container");
    const prev = paginatorInnerContainer.children[0];
    fireEvent.click(prev);
    expect(props.clickOnPage).toHaveBeenCalledTimes(1);
    expect(props.clickOnPage).toHaveBeenCalledWith(4);
    const next = paginatorInnerContainer.children[4];
    fireEvent.click(next);
    expect(props.clickOnPage).toHaveBeenCalledTimes(2);
    expect(props.clickOnPage).toHaveBeenCalledWith(6);
    const page1 = paginatorInnerContainer.children[1];
    fireEvent.click(page1);
    expect(props.clickOnPage).toHaveBeenCalledTimes(3);
    expect(props.clickOnPage).toHaveBeenCalledWith(1);
    const pageLast = paginatorInnerContainer.children[3];
    fireEvent.click(pageLast);
    expect(props.clickOnPage).toHaveBeenCalledTimes(4);
    expect(props.clickOnPage).toHaveBeenCalledWith(10);
  });
});
