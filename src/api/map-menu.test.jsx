import {mapMenu, mapMenuLinks} from "./map-menu";

describe('map-menu', () => {
  it("should return a predefined object if no data", () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false)
    expect(menu.text).toBe('')
    expect(menu.link).toBe('')
  });

  it("should map menu to match keys and values required", () => {
    const menu = mapMenu({
      "new_tab": false,
      "logo_text": "LOGO",
      "logo_link": "#home",
      "menu": [
        {
          "link_text": "intro",
          "url": "#intro",
        },
        {
          "link_text": "grid-one",
          "url": "#grid-one"
        }
      ],

    });
    expect(menu.newTab).toBe(false)
    expect(menu.text).toBe('LOGO')
    expect(menu.link).toBe('#home')
    expect(menu.links[0].children).toBe('intro')
    expect(menu.links[0].link).toBe('#intro')
  });

  it("should return an empty array if no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it("should map links if links passed", () => {
    const links = mapMenuLinks ([
      {
        "link_text": "intro",
        "url": "#intro",
      },
      {}
    ]);
    expect(links[0].children).toBe('intro')
    expect(links[0].link).toBe('#intro')
  });


});
