/// <reference path="./react.d.ts" />

declare module "react-sparklines"
{
    interface SparklinesProps
    {
        data: number[];
        limit?: number;
        width?: number | string;
        height?: number | string;
        style?: any;    
    }
    
    export class SparklinesLine extends __React.Component<{color?: string, style?: any}, {}>
    {
    }
    
    export class SparklinesReferenceLine extends __React.Component<{type: string}, {}>
    {
    }
    export class Sparklines extends __React.Component<SparklinesProps, {}>
    {
    }
}
