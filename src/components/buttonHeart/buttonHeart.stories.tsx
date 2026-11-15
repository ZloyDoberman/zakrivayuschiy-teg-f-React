import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heart } from "./buttonHeart";

const meta = {
  title: "UI/Heart",
  component: Heart,
} satisfies Meta<typeof Heart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
