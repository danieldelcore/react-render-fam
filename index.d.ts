import { Component, ReactNode } from 'react';

interface IfProps {
    children?: ReactNode;
    predicate?: boolean;
}

export class If extends Component<IfProps> {}
