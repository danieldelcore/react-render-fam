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

### `<Omit>`

Renders a subset of elements which return truthy for all supplied predicates.

**Props:**

- `predicates` A function **or** an array of functions. Current value is passed to each predicate for evaluation
- `values` An array of elements to be evaluated and rendered
- `render` Called for every value that satisfies the supplied predicates

**Example:** Renders all values between 6 and 99

```jsx
import { Omit } from 'react-render-fam';

const data = [
    { id: 2, value: 1 },
    { id: 3, value: 10 },
    { id: 4, value: 20 },
    { id: 5, value: 99 },
    { id: 7, value: 2000 },
];

const greaterThanFive = ({ value }) => value > 5;
const lessThanOneHundred = ({ value }) => value < 100;

<Omit
    values={data}
    predicates={[
        greaterThanFive,
        lessThanOneHundred,
    ]}
    render={({ id, value }) => (
        <p key={id}>{value}</p>
    )}
/>

```
