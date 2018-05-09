import React from 'react';
import renderer from 'react-test-renderer';
import { Omit } from '.';

test('Renders the content if predicate is true', () => {
    const data = [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 5 },
        { id: 4, value: 6 },
        { id: 5, value: 2000 },
    ];

    const component = renderer.create(
        <Omit
            values={data}
            predicates={({ value }) => value > 5}
            render={({ id, value }) => (
                <p key={id}>{value}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders the content if all predicates are true', () => {
    const data = [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 5 },
        { id: 4, value: 6 },
        { id: 5, value: 99 },
        { id: 6, value: 100 },
        { id: 7, value: 2000 },
    ];

    const greaterThanFive = ({ value }) => value > 5;
    const lessThanOneHundred = ({ value }) => value < 100;

    const component = renderer.create(
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
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders all items if predicates are omitted', () => {
    const data = [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 5 },
    ];

    const component = renderer.create(
        <Omit
            values={data}
            render={({ id, value }) => (
                <p key={id}>{value}</p>
            )}
        />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
