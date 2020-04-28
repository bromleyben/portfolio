import React from 'react';
import styled from 'styled-components';

interface PercentBarProps {
    label: string;
    percent: number;
    color: string;
    onClick: any;
}

const PercentBarDiv = styled.div<PercentBarProps>`
    display: flex;

    .label {
        width: 100px;
    }

    .bar {
        display: flex;
        flex: 1 0 auto;
    }

    .filled {
        width: ${props => props.percent}%;
        background-color: ${props => props.color};
    }

    .empty {
        text-align: right;
        flex: 1 1 auto;
    }
`;

function PercentBar (props: PercentBarProps) {
    return <PercentBarDiv onClick={props.onClick} {...props}>
        <div className='label'>
            {props.label}
        </div>

        <div className='bar'>
            <div className='filled'/>
            <div className='empty'>
                {props.percent}%
            </div>
        </div>
        
    </PercentBarDiv>
}

export default PercentBar;