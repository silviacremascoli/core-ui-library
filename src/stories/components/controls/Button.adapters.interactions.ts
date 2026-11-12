import * as React from 'react';
import { createRoot } from "react-dom/client";
import { createApp } from "vue";
import { expect, fn, userEvent, waitFor } from "storybook/test";
import { Button as ReactButton } from "../../../react/Button/Button";
import VueButton from "../../../vue/Button/Button.vue";

type AdapterProps = {
  label: string;
  onClick: (event: { preventDefault: () => void }) => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  iconLeft?: string;
  ariaLabel?: string;
  shape?: "pill";
  size?: "small";
  type?: "submit";
};

export async function testButtonAdapters() {
  const cases = [
    { name: "button", props: { shape: "pill", size: "small" } },
    { name: "submit button", props: { type: "submit" } },
    { name: "link", props: { href: "/docs" } },
    { name: "disabled button", props: { disabled: true } },
    { name: "loading button", props: { loading: true } },
    { name: "disabled link", props: { href: "/docs", disabled: true } },
    { name: "loading link", props: { href: "/docs", loading: true } },
    { name: "icon button", props: { iconOnly: true, iconLeft: "plus", ariaLabel: "Add item" } },
    { name: "icon label fallback", props: { iconOnly: true, iconLeft: "plus" } },
  ] as const;

  for (const adapter of ["React", "Vue"] as const) {
    for (const testCase of cases) {
      const fixture = document.createElement("div");
      document.body.append(fixture);
      const onClick = fn((event: { preventDefault: () => void }) => event.preventDefault());
      const props: AdapterProps = { label: "Action", onClick, ...testCase.props };
      const root = adapter === "React" ? createRoot(fixture) : undefined;
      const app = adapter === "Vue" ? createApp(VueButton, props) : undefined;

      try {
        if (root) root.render(React.createElement(ReactButton, props as React.ComponentProps<typeof ReactButton>));
        if (app) app.mount(fixture);
        await waitFor(() => expect(fixture.querySelector("button, a")).not.toBeNull());
        const element = fixture.querySelector("button, a") as HTMLElement;
        const unavailable = props.disabled || props.loading;

        await expect(element.tagName, `${adapter} ${testCase.name}`).toBe(props.href ? "A" : "BUTTON");
        if (!props.href) await expect(element).toHaveAttribute("type", props.type ?? "button");
        if (props.href && !unavailable) await expect(element).toHaveAttribute("href", "/docs");
        if (props.href && unavailable) {
          await expect(element).not.toHaveAttribute("href");
          await expect(element).toHaveAttribute("aria-disabled", "true");
          await expect(element).toHaveAttribute("tabindex", "-1");
        }
        if (!props.href && unavailable) await expect(element).toBeDisabled();
        if (props.loading) await expect(element).toHaveAttribute("aria-busy", "true");
        if (props.iconOnly) await expect(element).toHaveAccessibleName(props.ariaLabel ?? props.label);
        if (props.shape) await expect(element).toHaveClass("cui-btn--pill", "cui-btn--small");

        if (unavailable) {
          element.click();
          await expect(onClick).not.toHaveBeenCalled();
        } else {
          await userEvent.click(element);
          await expect(onClick).toHaveBeenCalledTimes(1);
        }
      } finally {
        root?.unmount();
        app?.unmount();
        fixture.remove();
      }
    }
  }
}