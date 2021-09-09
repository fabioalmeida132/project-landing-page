import {SectionBackground} from ".";
import {SectionContainer} from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
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
      <SectionBackground {...args} />
    </div>
  );
};
