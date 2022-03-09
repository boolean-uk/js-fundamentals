const {
  a,
  b,
  c,
  d,
  e,
  f,
} = require("../../src/conditional-flow/string-conditions");

describe("String Conditions isHello:", () => {
  fit("Returns false with 'goodbye'", () => {
    expect(a("goodbye")).toEqual(false);
  });
  fit("Returns true with 'Hello'", () => {
    expect(a("Hello")).toEqual(true);
  });
});

describe("String Conditions isNotHello:", () => {
  fit("Returns true with 'goodbye'", () => {
    expect(b("goodbye")).toEqual(true);
  });
  fit("Returns false with 'Hello'", () => {
    expect(b("Hello")).toEqual(false);
  });
});

describe("String Conditions isLongerThan:", () => {
  fit("'Mike' is longer than 'Ed'", () => {
    expect(c("Mike", "Ed")).toEqual(true);
  });
  fit("'Mike' is not longer than 'Lewis'", () => {
    expect(c("Mike", "Lewis")).toEqual(false);
  });
  fit("'Mike' is not longer than 'Mike'", () => {
    expect(c("Mike", "Mike")).toEqual(false);
  });
});

describe("String Conditions hasOddNumberVowels:", () => {
  fit("'Alex' does not have odd number vowels", () => {
    expect(d("Alex")).toEqual(false);
  });
  fit("'Mo' does have odd number vowels", () => {
    expect(d("Mo")).toEqual(true);
  });
  fit("'Joanna' does have odd number vowels", () => {
    expect(d("Joanna")).toEqual(true);
  });
  fit("'Maggie Smith' does not have odd number vowels", () => {
    expect(d("Maggie Smith")).toEqual(false);
  });
});

describe("String conditions getMiddleLetter:", () => {
  fit("'Alex' returns 'le'", () => {
    expect(e("Alex")).toEqual("le");
  });
  fit("'Edward' returns 'wa'", () => {
    expect(e("Edward")).toEqual("wa");
  });
  fit("'Kayla' returns 'y'", () => {
    expect(e("Kayla")).toEqual("y");
  });
  fit("'Tom' returns 'o'", () => {
    expect(e("Tom")).toEqual("o");
  });
});

describe("String conditions seasonForMonth:", () => {
  fit("January is Winter", () => {
    expect(f("January")).toEqual("Winter");
  });
  fit("February is Winter", () => {
    expect(f("February")).toEqual("Winter");
  });
  fit("March is Spring", () => {
    expect(f("March")).toEqual("Spring");
  });
  fit("April is Spring", () => {
    expect(f("April")).toEqual("Spring");
  });
  fit("May is Spring", () => {
    expect(f("May")).toEqual("Spring");
  });
  fit("June is Summer", () => {
    expect(f("June")).toEqual("Summer");
  });
  fit("July is Summer", () => {
    expect(f("July")).toEqual("Summer");
  });
  fit("August is Summer", () => {
    expect(f("August")).toEqual("Summer");
  });
  fit("September is Autumn", () => {
    expect(f("September")).toEqual("Autumn");
  });
  fit("October is Autumn", () => {
    expect(f("October")).toEqual("Autumn");
  });
  fit("November is Autumn", () => {
    expect(f("November")).toEqual("Autumn");
  });
  fit("December is Winter", () => {
    expect(f("December")).toEqual("Winter");
  });
  fit("Marchprilvember is empty", () => {
    expect(f("Marchprilvember")).toEqual("");
  });
});
