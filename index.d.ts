import { Component, ReactNode } from 'react';

interface RenderProp {
    (value: any, i: number): ReactNode;
}

interface IfProps {
    children?: ReactNode;
    predicate?: boolean;
}

export class If extends Component<IfProps> {}

interface OmitProps {
    predicates?: Function | Array<Function>;
    render?: RenderProp;
    values?: Array<Object>;
}

export class Omit extends Component<OmitProps> {}

interface SortProps {
    by: string;
    compare?: Function;
    descending?: boolean;
    render?: RenderProp;
    values?: Array<Object>;
}

export class Sort extends Component<SortProps> {}
