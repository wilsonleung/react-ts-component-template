import type { Story } from "@ladle/react";
import MyButton, { MyButtonProps } from "@/button/Button";

export const button: Story<MyButtonProps> = ({ label }) => <MyButton label={label} />
button.storyName = "Default";
button.args = {
  label: "Good Morning"
}
