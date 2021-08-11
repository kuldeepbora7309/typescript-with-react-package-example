import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToggleButton from "../Component/ToggleButton";

export default {
  title: "Example/Toggle",
  component: ToggleButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ToggleButton>;

// const Template: ComponentStory<typeof ToggleButton> = (args) => (
//   <ToggleButton {...args} />
// );

// export const Button = Template.bind({});
// Button.args = {
//   toggle: true,
// };
