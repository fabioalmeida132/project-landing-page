import {screen} from "@testing-library/react";
import {mapSectionTwoColumns, mapSections, mapSectionContent, mapTextGrid, mapImageGrid} from "./map-sections";


describe('map-sections', () => {
  it("should render predefined section if no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
  })

  it("should map sections two columns", () => {
    const data = mapSectionTwoColumns(     {
      "__component": "section.section-two-columns",
      "_id": "612eac87f4a0c54388bdb740",
      "title": "JANUARY BRINGS US FIREFOX 85",
      "description": "descript",
      "metadata": {
        "section_id": "home",
        "background": true,
        "_id": "612eac87f4a0c54388bdb749",
        "name": "Home",
        "__v": 0,
        "id": "612eac87f4a0c54388bdb749"
      },
      "__v": 1,
      "image": {
        "_id": "612ea8def4a0c54388bdb739",
        "name": "javascript",
        "alternativeText": "Desenho de pessoas segurando logos do css, javascript e html",
        "caption": "",
        "hash": "undraw_static_assets_rpm6_7708635a73",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 36.76,
        "url": "a.svg",
        "provider_metadata": {
          "public_id": "undraw_static_assets_rpm6_7708635a73",
          "resource_type": "image"
        },
        "provider": "cloudinary",
        "width": 1030,
        "height": 730,
        "related": [
          "612eac87f4a0c54388bdb740",
          "612eac87f4a0c54388bdb746"
        ],
        "createdAt": "2021-08-31T22:10:38.593Z",
        "updatedAt": "2021-08-31T22:26:17.309Z",
        "__v": 0,
        "id": "612ea8def4a0c54388bdb739"
      },
      "id": "612eac87f4a0c54388bdb740"
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
      "_id": "612eac87f4a0c54388bdb741",
      "title": "NEWS COVERAGE AND SOME SURPRISES",
      "content": "<p>teste</p>",
      "metadata": {
        "section_id": "intro",
        "background": false,
        "_id": "612eac87f4a0c54388bdb747",
        "name": "Intro",
        "__v": 0,
        "id": "612eac87f4a0c54388bdb747"
      },
      "__v": 1,
      "id": "612eac87f4a0c54388bdb741"
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
      "_id": "612eac87f4a0c54388bdb742",
      "title": "My Grid",
      "description": "abc",
      "text_grid": [
        {
          "_id": "612eac87f4a0c54388bdb74a",
          "title": "Teste 1",
          "description": "aaabb",
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74a"
        },
        {
          "_id": "612eac87f4a0c54388bdb74b",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "title": "Teste 2",
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74b"
        },
        {
          "_id": "612eac87f4a0c54388bdb74c",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "title": "Teste 3",
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74c"
        }
      ],
      "image_grid": [

      ],
      "metadata": {
        "section_id": "grid-one",
        "background": true,
        "_id": "612eac88f4a0c54388bdb767",
        "name": "grid-one",
        "__v": 0,
        "id": "612eac88f4a0c54388bdb767"
      },
      "__v": 2,
      "id": "612eac87f4a0c54388bdb742"
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
      "_id": "612eac87f4a0c54388bdb743",
      "title": "Gallery",
      "description": "abc",
      "text_grid": [],
      "image_grid": [
        {
          "_id": "612eac87f4a0c54388bdb74d",
          "image": {
            "_id": "612eaa80f4a0c54388bdb73a",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "Denho abstrato",
            "caption": "",
            "hash": "360x360_r_1_f753420819",
            "ext": "",
            "mime": "image/jpeg",
            "size": 31.96,
            "width": 360,
            "height": 360,
            "url": "a.svg",
            "provider_metadata": {
              "public_id": "360x360_r_1_f753420819",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_f753420819",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 7.92,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448257/thumbnail_360x360_r_1_f753420819.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_f753420819",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:17:36.977Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eaa80f4a0c54388bdb73a"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74d"
        },
        {
          "_id": "612eac87f4a0c54388bdb74e",
          "image": {
            "_id": "612eaaa2f4a0c54388bdb73b",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "xicara de café",
            "caption": "",
            "hash": "360x360_r_1_a9a2c5283c",
            "ext": "",
            "mime": "image/jpeg",
            "size": 15.78,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448290/360x360_r_1_a9a2c5283c.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_a9a2c5283c",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_a9a2c5283c",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 4.64,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448291/thumbnail_360x360_r_1_a9a2c5283c.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_a9a2c5283c",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:18:10.741Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eaaa2f4a0c54388bdb73b"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74e"
        },
        {
          "_id": "612eac87f4a0c54388bdb74f",
          "image": {
            "_id": "612eaac3f4a0c54388bdb73c",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "garoto em uma montanha",
            "caption": "",
            "hash": "360x360_r_1_08d0a92dd9",
            "ext": "",
            "mime": "image/jpeg",
            "size": 21.82,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448323/360x360_r_1_08d0a92dd9.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_08d0a92dd9",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_08d0a92dd9",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 5.5,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448323/thumbnail_360x360_r_1_08d0a92dd9.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_08d0a92dd9",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:18:43.048Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eaac3f4a0c54388bdb73c"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb74f"
        },
        {
          "_id": "612eac87f4a0c54388bdb750",
          "image": {
            "_id": "612eaae1f4a0c54388bdb73d",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "cidade com prédio branco",
            "caption": "",
            "hash": "360x360_r_1_d773045ae5",
            "ext": "",
            "mime": "image/jpeg",
            "size": 22.97,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448352/360x360_r_1_d773045ae5.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_d773045ae5",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_d773045ae5",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 5.26,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448354/thumbnail_360x360_r_1_d773045ae5.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_d773045ae5",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:19:13.621Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eaae1f4a0c54388bdb73d"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb750"
        },
        {
          "_id": "612eac87f4a0c54388bdb751",
          "image": {
            "_id": "612eaaf9f4a0c54388bdb73e",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "cidade denoite",
            "caption": "",
            "hash": "360x360_r_1_596f8738e6",
            "ext": "",
            "mime": "image/jpeg",
            "size": 25.57,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448378/360x360_r_1_596f8738e6.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_596f8738e6",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_596f8738e6",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 6.08,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448378/thumbnail_360x360_r_1_596f8738e6.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_596f8738e6",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:19:37.990Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eaaf9f4a0c54388bdb73e"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb751"
        },
        {
          "_id": "612eac87f4a0c54388bdb752",
          "image": {
            "_id": "612eab0ef4a0c54388bdb73f",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "papagaio",
            "caption": "",
            "hash": "360x360_r_1_5bae51ef39",
            "ext": "",
            "mime": "image/jpeg",
            "size": 26.72,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448395/360x360_r_1_5bae51ef39.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_5bae51ef39",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_5bae51ef39",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 7.35,
                "path": null,
                "url": "https://res.cloudinary.com/cursonext001/image/upload/v1630448398/thumbnail_360x360_r_1_5bae51ef39.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_5bae51ef39",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [

            ],
            "createdAt": "2021-08-31T22:19:58.417Z",
            "updatedAt": "2021-09-19T19:51:38.673Z",
            "__v": 0,
            "id": "612eab0ef4a0c54388bdb73f"
          },
          "__v": 0,
          "id": "612eac87f4a0c54388bdb752"
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
