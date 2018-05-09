import React from 'react';
import renderer from 'react-test-renderer';
import { If } from '.';

test('Renders the content if predicate is true', () => {
    const value = true;
    const component = renderer.create(
        <If predicate={value}>
            <p>Hello!</p>
        </If>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Renders the content if predicate supplied as a boolean attribute', () => {
    const component = renderer.create(
        <If predicate>
            <p>Hello!</p>
        </If>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Omits the content if predicate not supplied', () => {
    const component = renderer.create(
        <If>
            <p>Hello!</p>
        </If>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('Omits the content if predicate is false', () => {
    const value = false;
    const component = renderer.create(
        <If predicate={value}>
            <p>Hello!</p>
        </If>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
