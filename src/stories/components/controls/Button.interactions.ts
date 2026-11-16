import { expect, fn, userEvent, within } from "storybook/test";
import { buttonTemplate } from "../../../twig/Button";

export async function testButtonShapes() {
  const themes = ["default", "sage", "amber", "ocean", "midnight"];
  const shapes = ["default", "rounded", "pill"] as const;
  const sizes = ["small", "medium", "large"] as const;
  const radius = { default: "8px", rounded: "10px", pill: "9999px" };
  const failures: string[] = [];
  const container = document.createElement("div");
  container.style.cssText = "position: absolute; visibility: hidden;";
  document.body.append(container);

  try {
    for (const theme of themes) {
      container.className = `cui-theme--${theme}`;
      for (const size of sizes) {
        for (const shape of shapes) {
          for (const kind of ["text", "icon", "icon-link"] as const) {
            container.innerHTML = buttonTemplate({
              label: "Action", variant: "primary", size, shape,
              iconOnly: kind !== "text", iconLeft: kind === "text" ? undefined : "plus",
              href: kind === "icon-link" ? "/" : undefined,
            });
            const button = container.firstElementChild as HTMLElement;
            const style = getComputedStyle(button);
            if (style.borderTopLeftRadius !== radius[shape]) {
              failures.push(`${theme} ${size} ${shape} ${kind}: border-radius ${style.borderTopLeftRadius}`);
            }
            if (theme === "sage" && size === "medium" && shape === "pill" && kind === "icon-link") {
              const bounds = button.getBoundingClientRect();
              if (bounds.width !== 48 || bounds.height !== 48) failures.push("Sage icon link is not 48px square");
            }
          }
        }
      }
    }

    container.className = "cui-theme--default";
    container.style.setProperty("--cui-spacing-xs", "3px");
    container.style.setProperty("--cui-spacing-sm", "7px");
    container.style.setProperty("--cui-spacing-md", "11px");
    container.style.setProperty("--cui-spacing-lg", "15px");
    const textPadding = { small: "3px 7px", medium: "7px 11px", large: "11px 15px" };
    const iconPadding = { small: "7px 7px", medium: "11px 11px", large: "15px 15px" };
    for (const size of sizes) {
      for (const shape of shapes) {
        for (const kind of ["text", "icon"] as const) {
          container.innerHTML = buttonTemplate({
            label: "Action", size, shape,
            iconOnly: kind === "icon", iconLeft: kind === "icon" ? "plus" : undefined
          });
          const button = container.firstElementChild as HTMLElement;
          const style = getComputedStyle(button);
          const expectedPadding = kind === "text" ? textPadding[size] : iconPadding[size];
          if (style.padding !== expectedPadding) {
            failures.push(`Custom spacing ${size} ${shape} ${kind}: ${style.padding}`);
          }
        }
      }
    }
    await expect(failures).toEqual([]);
  } finally {
    container.remove();
  }
}

export async function testButtonLink(canvasElement: HTMLElement) {
  const link = within(canvasElement).getByRole("link", { name: "View documentation" });
  await expect(link).toHaveAttribute("href", "/docs");
  await expect(link.tagName).toBe("A");
}

export async function testIconOnlyButton(canvasElement: HTMLElement) {
  const button = within(canvasElement).getByRole("button", { name: "Add transaction item" });
  await expect(button).toHaveAccessibleName("Add transaction item");
  await expect(button).not.toHaveTextContent("Add transaction item");

  const fixture = document.createElement("div");
  fixture.innerHTML = buttonTemplate({ label: "Fallback label", iconOnly: true, iconLeft: "plus" });
  await expect(within(fixture).getByRole("button", { name: "Fallback label" })).toHaveAccessibleName("Fallback label");
}

async function testUnavailableLink(loading: boolean) {
  const fixture = document.createElement("div");
  fixture.innerHTML = buttonTemplate({ label: "Unavailable link", href: "/docs", disabled: !loading, loading });
  document.body.append(fixture);

  try {
    const link = within(fixture).getByText("Unavailable link");
    await expect(link.tagName).toBe("A");
    await expect(link).not.toHaveAttribute("href");
    await expect(link).toHaveAttribute("aria-disabled", "true");
    await expect(link).toHaveAttribute("tabindex", "-1");
    await expect(getComputedStyle(link).pointerEvents).toBe("none");
    if (loading) await expect(link).toHaveAttribute("aria-busy", "true");
  } finally {
    fixture.remove();
  }
}

export async function testUnavailableButton(canvasElement: HTMLElement, loading: boolean) {
  const button = within(canvasElement).getByRole("button");
  const onClick = fn();
  button.addEventListener("click", onClick);
  try {
    await expect(button).toBeDisabled();
    if (loading) await expect(button).toHaveAttribute("aria-busy", "true");
    button.click();
    await expect(onClick).not.toHaveBeenCalled();
    await testUnavailableLink(loading);
  } finally {
    button.removeEventListener("click", onClick);
  }
}

export async function testButtonKeyboard(canvasElement: HTMLElement) {
  const button = within(canvasElement).getByRole("button", { name: "Submit Form" });
  const onClick = fn();
  button.addEventListener("click", onClick);

  try {
    await expect(button).toHaveAttribute("type", "button");
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await expect(button.matches(":focus-visible")).toBe(true);
    await expect(getComputedStyle(button).outlineStyle).toBe("solid");
    await userEvent.keyboard("{Enter}[Space]");
    await expect(onClick).toHaveBeenCalledTimes(2);

    const fixture = document.createElement("div");
    fixture.innerHTML = buttonTemplate({ label: "Submit", type: "submit" });
    await expect(within(fixture).getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit");
  } finally {
    button.removeEventListener("click", onClick);
    button.blur();
  }
}