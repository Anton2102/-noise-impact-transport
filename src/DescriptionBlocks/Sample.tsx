import React, { ReactNode } from 'react';

const LTPR = (): ReactNode => {
    return ( <>L<span className="nit-formula-index">ТРП</span> + ΔL<span className="nit-formula-index">V</span> =</> );
}

const LI = (): ReactNode => {
    return ( <>ΔL<span className="nit-formula-index">I</span> =</> );
}

const LD = (): ReactNode => {
    return ( <>ΔL<span className="nit-formula-index">D</span> =</> );
}

const LKAP = (): ReactNode => {
    return ( <>ΔL<span className="nit-formula-index">КАР</span> =</> );
}

const LDIZ = (): ReactNode => {
    return ( <>ΔL<span className="nit-formula-index">ДИЗ</span> =</> );
}

const LL = (): ReactNode => {
    return ( <>ΔL<span className="nit-formula-index">L</span> =</> );
}

const KP = (): ReactNode => {
    return ( <>K<span className="nit-formula-index">P</span> =</> );
}

const F = (): ReactNode => {
    return ( <>F =</> );
}

export {LTPR, LI, LD, LKAP, LDIZ, LL, KP, F};