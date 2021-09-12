import {screen} from "@testing-library/react";
import {renderTheme} from "../../styles/render-theme";
import mock from "./mock";
import {GridTwoColumn} from "./index";

describe("<GridTwoColumn/>", () => {
  it("should render two column grid", () => {
    const {container} = renderTheme(<GridTwoColumn {...mock}/>);
    expect(container).toMatchSnapshot();
  });
});
