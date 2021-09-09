import {SectionContainer} from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at eius numquam placeat quas quia quibusdam</p>
      </div>
    ),
  },
  argTypes: {
    children: {type: ""},
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
