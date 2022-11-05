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

const LEKV = (): ReactNode => {
    return ( <>L<span className="nit-formula-index">ЭКВ</span> =</> );
}

const WMAX = (): ReactNode => {
    return ( <>W<span className="nit-formula-index">MAX</span> = 0.5 x (c - 25) =</> );
}

const AZEL = (): ReactNode => {
    return ( <>L<span className="nit-formula-index">A,ЗЕЛ</span> =</> );
}

const B = (): ReactNode => {
    return ( <>ɓ = (a + b) - c =</> );
}

const AECRB = (): ReactNode => {
    return ( <>A<span className="nit-formula-index">A.ЭКР.ɓ</span> =</> );
}

const YGL = (): ReactNode => {
    return ( <>Угол =</> );
}

const AECR = (): ReactNode => {
    return ( <>L<span className="nit-formula-index">A.ЭКР.a</span> =</> );
}

const L = (): ReactNode => {
    return ( <>L =</> );
}

const H = (): ReactNode => {
    return ( <>H =</> );
}

export {LTPR, LI, LD, LKAP, LDIZ, LL, KP, F, LEKV, WMAX, AZEL, B, AECRB, YGL, AECR, L, H};