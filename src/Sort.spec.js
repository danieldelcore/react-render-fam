import React from 'react';
import renderer from 'react-test-renderer';
import { Sort } from '.';

test('Renders the content in ascending order', () => {
    const data = [
        { id: 1, value: -10 },
        { id: 10, value: 0 },
        { id: 5, value: 2000 },
        { id: 4, value: 6 },
        { id: 2, value: 1 },
    ];

    const component = renderer.create(
        <Sort
            values={data}
            by="value"
            render={({ id, value }) => (
                <p key={id}>{value}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders the content in ascending order if all comparison options are omitted', () => {
    const data = [
        { id: 1, value: -10 },
        { id: 10, value: 0 },
        { id: 5, value: 2000 },
        { id: 4, value: 6 },
        { id: 2, value: 1 },
    ];

    const component = renderer.create(
        <Sort
            values={data}
            by="value"
            render={({ id, value }) => (
                <p key={id}>{value}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders the content in descending order', () => {
    const data = [
        { id: 1, value: -10 },
        { id: 10, value: 0 },
        { id: 5, value: 2000 },
        { id: 4, value: 6 },
        { id: 2, value: 1 },
    ];

    const component = renderer.create(
        <Sort
            values={data}
            by="value"
            descending
            render={({ id, value }) => (
                <p key={id}>{value}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders the content in the order specified by the supplied compare function', () => {
    const data = [
        { name: 'Edward', id: 1 },
        { name: 'Sharpe', id: 2 },
        { name: 'And', id: 3 },
        { name: 'The', id: 4 },
        { name: 'Magnetic', id: 5 },
        { name: 'Zeros', id: 6 },
    ];

    const compare = (by, a, b) => {
        const nameA = a[by].toUpperCase();
        const nameB = b[by].toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    };

    const component = renderer.create(
        <Sort
            values={data}
            by="name"
            compare={compare}
            render={({ id, name }) => (
                <p key={id}>{name}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
