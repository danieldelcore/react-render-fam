# react-render-fam

## Installation

**npm:** `$ npm install --save react-render-fam`

_or_

**Yarn:** `$ yarn add react-render-fam`

## Usage

### `<If> `

Conditionally renders the children nodes when the predicate(s) return `true`.

**Props:**

- `predicate` A boolean expression

**Example:**

```jsx
import { If } from 'react-render-fam';

function shouldISayHello() {
    return true;
}

<If predicate={shouldISayHello()}>
    <p>Hello World!</p>
</If>
```

