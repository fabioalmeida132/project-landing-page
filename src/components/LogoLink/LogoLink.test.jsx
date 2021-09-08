import {screen} from "@testing-library/react";
import {renderTheme} from "../../styles/render-theme";
import {LogoLink} from ".";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Teste"/>);
    const heading = screen.getByRole("heading",{ name: "Teste"});
    expect(heading.firstChild).toHaveAttribute(`href`,`#target`);
  });

  it("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="Teste" srcImg="image.jpg"/>);
    expect(screen.getByRole('img', {name: "Teste"})).toHaveAttribute(`src`,`image.jpg`);
  });

  it("should match snapshot", () => {
    const {container} = renderTheme(<LogoLink link="#target" text="Teste" srcImg="image.jpg"/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
