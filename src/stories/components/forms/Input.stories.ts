import type { Meta, StoryObj } from "@storybook/html";
import InputTwig, { inputTemplate } from "../../../twig/Input";
import { Input as InputReact } from "../../../react/Input";
import InputVue from "../../../vue/Input";
import "../../../components/Input/Input.css";

export interface InputArgs {
  label: string;
  type?: "text" | "date" | "time" | "search";
  placeholder?: string;
}

const meta: Meta<InputArgs> = {
  title: "Components/Input",
  tags: ["autodocs"],
  render: (args) => inputTemplate(args),
  argTypes: {
    label: {
      description: "Accessible label for the input (used as aria-label)",
      control: "text",
    },
    type: {
      description: "Input type: text, date, time, or search",
      control: { type: "select" },
      options: ["text", "date", "time", "search"],
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
  },

  args: {
    label: "Input label",
    type: "text",
    placeholder: "Enter text",
  },
};

export default meta;

type Story = StoryObj<InputArgs>;

export const Text: Story = {
  args: {
    label: "Text input",
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Date: Story = {
  args: {
    label: "Date input",
    type: "date",
    placeholder: "Select a date",
  },
};

export const Time: Story = {
  args: {
    label: "Time input",
    type: "time",
    placeholder: "Select a time",
  },
};

export const Search: Story = {
  args: {
    label: "Search input",
    type: "search",
    placeholder: "Search...",
  },
};

export const Accessibility: Story = {
  args: {
    label: "First name",
    type: "text",
    placeholder: "e.g. Maria",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The input is announced to screen readers through its accessible name (WCAG 4.1.2 Name, Role, Value). " +
          "Try it: press Tab to move focus into the field — the browser speaks the label, not the placeholder. " +
          "A visible focus ring appears on focus (WCAG 2.4.7 Focus Visible), and the field is keyboard-operable by default " +
          "because it uses the native <input> element (WCAG 2.1.1 Keyboard).",
      },
    },
  },
};
