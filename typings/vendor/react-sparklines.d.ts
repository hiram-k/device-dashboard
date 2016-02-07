/// <reference path="./react.d.ts" />

declare module "react-sparklines"
{
    interface SparklinesProps
    {
        data: number[];
        limit?: number;
        width?: number;
        height?: number;
        style?: any;    
    }
    
    export class SparklinesLine extends __React.Component<{color?: string, style?: any}, {}>
    {
    }
    
    export class Sparklines extends __React.Component<SparklinesProps, {}>
    {
    }
}
