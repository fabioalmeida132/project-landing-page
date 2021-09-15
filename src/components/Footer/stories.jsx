import {Footer} from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://www.google.com">Feito por Fábio Almeida</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
