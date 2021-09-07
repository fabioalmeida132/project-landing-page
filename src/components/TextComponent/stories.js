import {TextComponent} from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      "Aliquam culpa dicta dolor doloribus esse expedita modi nostrum" +
      "perferendis possimus quae, quam quis ratione reiciendis repellat reprehenderit repudiandae saepe ut vero",
  },
  argTypes: {
    children: {type: "string"},
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
