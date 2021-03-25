import React from 'react';

function Loading(props) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }} width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={50} cy={50} r={0} fill="none" stroke="#474747" strokeWidth={2}>
                    <animate attributeName="r" repeatCount="indefinite" dur="1.4492753623188404s" values="0;29" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s" />
                    <animate attributeName="opacity" repeatCount="indefinite" dur="1.4492753623188404s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" />
                </circle><circle cx={50} cy={50} r={0} fill="none" stroke="#a6a6a6" strokeWidth={2}>
                    <animate attributeName="r" repeatCount="indefinite" dur="1.4492753623188404s" values="0;29" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.7246376811594202s" />
                    <animate attributeName="opacity" repeatCount="indefinite" dur="1.4492753623188404s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.7246376811594202s" />
                </circle>
            </svg>
        </div>
    );
}

export default Loading;