import { align, flexDirection, justify } from "./theme";

export interface ContainerProps extends React.ComponentPropsWithRef<"section">{
    align: keyof typeof align;
    background?: string;
    boxesExemple: boolean;
    flexDirection?: keyof typeof flexDirection;
    gap?: number;
    height?: string
    justify: keyof typeof justify;
    paddingDesktop: string;
    paddingMobile: string;
    paddingBreakpointMobileToDesktop: number;
    styles?: {};
}

export interface ContainerStylesProps{
    props : {
        align: keyof typeof align;
        background?: string;
        flexDirection?: string;
        gap?: number;
        height?: string
        styles?: {};
        justify: keyof typeof justify;
        paddingDesktop: string;
        paddingMobile: string;
        paddingBreakpointMobileToDesktop: number;
    }
}
  