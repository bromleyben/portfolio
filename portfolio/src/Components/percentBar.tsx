import React from 'react';

interface PercentBarProps {
    label: string;
    percent: number;
    color: string;
    onClick: any;
}

function PercentBar (props: PercentBarProps) {
    return <div className="percentBar" style={{display: 'flex'}} onClick={props.onClick}>
        <div style={{width: '100px'}}>
            {props.label}
        </div>

        <div style={{display: 'flex', flex: '1 0 auto'}}>
            <div style={{width: `${props.percent}%`, backgroundColor: props.color}}></div>
            <div style={{textAlign: 'right', flex: '1 1 auto'}}>
                {props.percent}%
            </div>
        </div>
        
    </div>
}

export default PercentBar;