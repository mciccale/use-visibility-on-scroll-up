# use-visibility-on-scroll-up

Toggle the visibility on scroll of elements in your **React** app easily.

When scrolling down, hide the element. When scrolling up, show the element.

## Features

- This **hook** provides an easy way to consult whether an element should be **visible** when **scrolling up and down**.
- You can also access the lastScroll of the user.
- **Next.js** ready out of the box.

## Installation

```shell
npm install use-visibility-on-scroll-up
# or
pnpm add use-visibility-on-scroll-up
# or
yarn add use-visibility-on-scroll-up
```

## Usage

The hook can be imported as follows:

```jsx
/*
 * Navbar.jsx
 */

import { useVisibilityOnScrollUp } from 'use-visibility-on-scroll-up';

// ...

const { visible, lastScroll } = useVisibilityOnScrollUp();
```

## Example

**Navbar Example using TailwindCSS**

```jsx
import { useVisibilityOnScrollUp } from 'use-visibility-on-scroll-up';

export default function Navbar() {
  const { visible, lastScroll } = useVisibilityOnScrollUp();

  // Show element if it's visible or the lastScroll was 0 (top of the page)

  return (
    <header
      className={`fixed top-0 w-full bg-white px-8 opacity-90 shadow-lg ${
        visible || lastScroll === 0 ? 'visible' : 'hidden'
      }`}
    >
      <nav className="mx-auto my-4 max-w-2xl">
        <ul className="flex items-center justify-between">
          <NavbarItem label="Home" path="/" />
          <NavbarItem label="About Me" path="/about" />
          <NavbarItem label="Posts" path="/posts" />
        </ul>
      </nav>
    </header>
  );
}
```
