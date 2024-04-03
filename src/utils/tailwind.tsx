import clsx, { type ClassValue } from "clsx";
import type { ComponentType, FunctionComponent, JSX } from "react";
import type {
  HTMLAttributesForTagName,
  HTMLElementTagName,
} from "./html-types.js";

type HTMLElementOrComponent =
  | HTMLElementTagName
  | ComponentType<WithClassname<unknown>>;

type WithClassname<Props> = Props & {
  className?: string;
};

/**
 * Whenever `createElementWithClassname` is called with a component, the return
 * type should be a React function component with the same signature, but with
 * the prop `className` added to the props.
 *
 * Whenever `createElementWithClassname` is called with an HTML element tag
 * name, the return type should be a React function component with the props of
 * the HTML element, as if you'd render the HTML element with JSX directly.
 */
type ReturnType<Component extends HTMLElementOrComponent> = FunctionComponent<
  PropsForHTMLElementOrComponent<Component>
>;

/**
 * Given the input component for `createElementWithClassname`, returns the
 * props for that component.
 */
type PropsForHTMLElementOrComponent<Component extends HTMLElementOrComponent> =
  Component extends ComponentType<infer Props>
    ? WithClassname<Props>
    : // TypeScript isn't smart enough to understand that `Component` is an HTML
      // element tag name at this point.
      Component extends HTMLElementTagName
      ? HTMLAttributesForTagName<Component>
      : never;

function createElementWithClassname<Component extends HTMLElementOrComponent>(
  component: Component,
  ...inputs: ClassValue[]
): ReturnType<Component> {
  type Props = PropsForHTMLElementOrComponent<Component>;

  function ComponentWithClasses(props: Props): JSX.Element {
    const { className, ...htmlProps } = props;
    const Component = component;

    const classes = clsx(...inputs, className);

    // @ts-expect-error TypeScript doesn't seem to understand that only adding
    // `className` to the props is valid.
    return <Component className={classes} {...htmlProps} />;
  }

  return ComponentWithClasses;
}

type TailwindFactory = typeof createElementWithClassname & {
  [Tag in HTMLElementTagName]: (...inputs: ClassValue[]) => ReturnType<Tag>;
};

/**
 * A utility for quickly creating components with Tailwind classes, using the
 * styled components syntax. It simply takes all the classes and passes it to
 * {@link clsx} to generate a `className` string.
 *
 * @example
 *
 * Creating a wrapper div and rendering it.
 *
 * ```tsx
 * const Wrapper = tailwind.div("w-64 flex", "border");
 *
 * function Main() {
 *   return <Wrapper className="text-red-500">Contents</Wrapper>
 * }
 * ```
 *
 * @example
 *
 * Extending a custom component.
 *
 * ```tsx
 * import { CustomComponent } from "./custom.component.jsx";
 *
 * const CustomWithClasses = tailwind(CustomComponent, "w-64 flex", "border");
 *
 * function Main() {
 *   return <CustomWithClasses className="text-red-500">Contents</Wrapper>
 * }
 * ```
 */
export const tailwind = new Proxy(createElementWithClassname, {
  get(target, name: HTMLElementTagName) {
    return (...inputs: ClassValue[]) => target(name, ...inputs);
  },
}) as TailwindFactory;
