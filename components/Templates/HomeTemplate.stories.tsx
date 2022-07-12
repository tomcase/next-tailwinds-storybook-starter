import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HomeTemplate } from "./HomeTemplate";

export default {
	title: "Templates/Home",
	component: HomeTemplate,
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = () => <HomeTemplate />;

export const Default = Template.bind({});
