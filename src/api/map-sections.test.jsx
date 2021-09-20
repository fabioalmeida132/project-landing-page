import {screen} from "@testing-library/react";
import {mapSectionTwoColumns, mapSections, mapSectionContent, mapTextGrid, mapImageGrid} from "./map-sections";
import pageFakeData from './dados.json'

describe('map-sections', () => {
  it("should render predefined section if no data", () => {
    const data = mapSections(undefined);
    expect(data).toEqual([]);
  })


  it("should render sections with correct data", () => {
    const  data = mapSections(pageFakeData[0].section);

     expect(data[0].component).toBe('section.section-two-columns');
  })

  it("should map sections two columns", () => {
    const data = mapSectionTwoColumns(     {
      "__component": "section.section-two-columns",
      "title": "JANUARY BRINGS US FIREFOX 85",
      "description": "descript",
      "metadata": {
        "section_id": "home",
        "background": true,
        "name": "Home",
      },
      "__v": 1,
      "image": {
        "name": "javascript",
        "alternativeText": "Desenho de pessoas segurando logos do css, javascript e html",
        "url": "a.svg",
      }
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('descript');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  })

  it("should map section content with no data",() => {
    const data = mapSectionContent()
    expect(data.background).toBe(false);
    expect(data.component).toBe(``);
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  })

  it("should map section content",() => {
    const data = mapSectionContent(      {
      "__component": "section.section-content",
      "title": "NEWS COVERAGE AND SOME SURPRISES",
      "content": "<p>teste</p>",
      "metadata": {
        "section_id": "intro",
        "background": false,
        "name": "Intro"
      },
    })
    expect(data.background).toBe(false);
    expect(data.component).toBe(`section.section-content`);
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
    expect(data.html).toBe('<p>teste</p>');
  })

  it("should map grid text",() => {
    const data = mapTextGrid(      {
      "__component": "section.section-grid",
      "title": "My Grid",
      "description": "abc",
      "text_grid": [
        {
          "title": "Teste 1",
          "description": "aaabb",
        },
        {
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "title": "Teste 2",
        },
        {
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "title": "Teste 3",
        }
      ],
      "image_grid": [

      ],
      "metadata": {
        "section_id": "grid-one",
        "background": true,
        "_id": "612eac88f4a0c54388bdb767",
        "name": "grid-one",
      }
    })
    expect(data.background).toBe(true);
    expect(data.component).toBe(`section.section-grid-text`);
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('aaabb');
  })

  it("should map grid text with no data",() => {
    const data = mapTextGrid(undefined)
    expect(data.background).toBe(false);
    expect(data.component).toBe(`section.section-grid-text`);
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  })

  it("should map grid image with no data",() => {
    const data = mapImageGrid(undefined)
    expect(data.background).toBe(false);
    expect(data.component).toBe(`section.section-grid-image`);
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  })

  it("should map grid image with data",() => {
    const data = mapImageGrid({
      "__component": "section.section-grid",
      "title": "Gallery",
      "description": "abc",
      "text_grid": [],
      "image_grid": [
        {
          "image": {
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "Denho abstrato",
            "url": "a.svg",
          }
        }
      ],
      "metadata": {
        "section_id": "gallery",
        "background": false,
        "_id": "612eac89f4a0c54388bdb773",
        "name": "gallery",
        "__v": 0,
        "id": "612eac89f4a0c54388bdb773"
      },
      "__v": 2,
      "id": "612eac87f4a0c54388bdb743"
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe(`section.section-grid-image`);
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('Denho abstrato');
  })
});
