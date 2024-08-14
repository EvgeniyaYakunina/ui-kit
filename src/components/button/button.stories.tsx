import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";
import { useRef } from "react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    disabled: false,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    disabled: false,
    variant: "secondary",
  },
};

export const Icon: Story = {
  args: {
    children: <>{/*<EditIcon />*/}</>,
    variant: "icon",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Primary Button",
    disabled: false,
    fullWidth: true,
    variant: "primary",
  },
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
    children: "As Link",
    variant: "secondary",
  },
  render: (args) => {
    const anchorRef = useRef<HTMLAnchorElement>(null);
    return (
      <div>
        <Button {...args} asChild>
          <a href="https://google.com" target="_blank" ref={anchorRef}>
            Go to google
          </a>
        </Button>
      </div>
    );
  },
};
export const ButtonWithIcon: Story = {
  args: {
    children: (
      <>
        {/*<LogOutIcon />*/}
        {"Button"}
      </>
    ),
    variant: "primary",
  },
};
