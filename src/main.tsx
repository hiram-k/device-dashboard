import * as Immutable from "immutable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactSparklines from "react-sparklines";

class DeviceSummaryState
{
    constructor(private _name: string, private _values?: Immutable.List<number>)
    {
        this._values = _values || Immutable.List.of<number>(50);        
    }
    public update()
    {
        const v = this._values.last() + (Math.random() * 0.1 - 0.05);
        const values = this._values.push(v).takeLast(300).toList();
        return new DeviceSummaryState(this._name, values);
    }
    public get name() { return this._name }
    public get values() { return this._values.toArray() }
}

interface IRootViewState
{
    devices: DeviceSummaryState[];    
}

class RootViewState implements IRootViewState
{
    private _devices: Immutable.List<DeviceSummaryState>;
    constructor()
    {
        this._devices = Immutable.List.of<DeviceSummaryState>(
            new DeviceSummaryState("hoge"),
            new DeviceSummaryState("fuga")
        );
    }
    public update()
    {
        this._devices = this._devices.map(dev => dev.update()).toList();
    }
    get devices() { return this._devices.toArray() }
}

class DeviceSummary extends React.Component<{key?: string, device: DeviceSummaryState}, {}>
{
    public render()
    {
        const device = this.props.device;
        return (
            <div className ="device-summary">
                <div className="device-name">{device.name}</div>
                <ReactSparklines.Sparklines data={device.values} limit={50}>
                    <ReactSparklines.SparklinesLine style={{ stroke: "none", fill: "blue", fillOpacity: "1" }} />
                </ReactSparklines.Sparklines>
            </div>
        );
    }
}

class RootView extends React.Component<{}, {s: RootViewState}>
{
    constructor()
    {
        super();
        this.state = {s: new RootViewState()};
    }
    
    public componentDidMount()
    {
        setInterval(() => {
            this.state.s.update();
            this.setState(this.state);
        }, 100);
    }
    
    public render()
    {
        const devices = this.state.s.devices.map(d => {
            return <DeviceSummary key={d.name} device={d}/>
        });
        return (<div>{devices}</div>)
    }
}

ReactDOM.render(<RootView />, document.getElementById("root-wrapper"));
