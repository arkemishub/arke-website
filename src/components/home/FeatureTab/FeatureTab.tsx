import React from "react";
import {twMerge} from "tailwind-merge";
import './style.css'

interface Props {
    active: number;
    onChange(value: number): void;
    color?: 'green';
}

export default function FeatureTab(props: Props){
    const {active, onChange, color = 'green'} = props;

    return(
        <div className={twMerge("feature-tab-card w-full relative py-3 rounded-xl overflow-hidden")}>
            <button
                onClick={() => onChange(0)}
                className={twMerge(`mx-4 lg:mx-6`, active === 0 ? 'text-primary' : 'text-secondary')}>
                Backend
            </button>
            <span className="feature-tab-vl" />
            <button
                onClick={() => onChange(1)}
                className={twMerge(`mx-4 lg:mx-6`, active === 1 ? 'text-primary' : 'text-secondary')}>
                Frontend
            </button>
            <span className="feature-tab-vl" />
            <button
                onClick={() => onChange(2)}
                className={twMerge(`mx-4 lg:mx-6`, active === 2 ? 'text-primary' : 'text-secondary')}>
                Console
            </button>
            <div className={`feature-tab-border-gradient feature-tab-${color}`}
                style={
                    active === 0 ? { marginLeft: 0 } :
                    active === 1 ? { marginLeft: "33%" } :
                    active === 2 ? { marginLeft: "66%" } : undefined
                }
            />
        </div>
    )
}