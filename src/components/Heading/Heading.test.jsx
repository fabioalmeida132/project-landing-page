import {screen} from '@testing-library/react'
import {renderTheme} from "../../styles/render-theme";
import {Heading} from "./index";
import { theme } from '../../styles/theme'

describe('<Heading/>', () => {
  it('should render with default values',() => {
    const {debug} = renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none'
    })
  })

  it('should render with white color',() => {
    const {debug} = renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render correct heading sizes',() => {
    const {debug} = renderTheme(<Heading size={'small'}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium
    })
  })

  it('should render with uppercase letters',() => {
    const {debug} = renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })


})
