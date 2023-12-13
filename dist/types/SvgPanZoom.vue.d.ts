import { PropType } from 'vue';
export interface Props {
    /**
     * can be querySelector string or SVGElement (default enabled)
     * @type {string|HTMLElement|SVGElement}
     */
    viewportSelector?: string | HTMLElement | SVGElement;
    /**
     * enable or disable panning (default enabled)
     * @type {boolean}
     */
    panEnabled?: boolean;
    /**
     * insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
     * @type {boolean}
     */
    controlIconsEnabled?: boolean;
    /**
     * enable or disable zooming (default enabled)
     * @type {boolean}
     */
    zoomEnabled?: boolean;
    /**
     * enable or disable zooming by double clicking (default enabled)
     * @type {boolean}
     */
    dblClickZoomEnabled?: boolean;
    /**
     * enable or disable zooming by scrolling (default enabled)
     * @type {boolean}
     */
    mouseWheelZoomEnabled?: boolean;
    /**
     * prevent mouse events to bubble up (default enabled)
     * @type {boolean}
     */
    preventMouseEventsDefault?: boolean;
    zoomScaleSensitivity?: number;
    minZoom?: number;
    maxZoom?: number;
    fit?: boolean;
    contain?: boolean;
    center?: boolean;
    refreshRate?: number | "auto";
    customEventsHandler?: CustomEventsHandler;
}
export interface CustomEventsHandler {
    haltEventListeners?: Array<string>;
    init: (options: object) => void;
    destroy: () => void;
}
export interface Events {
    (event: 'beforeZoom', oldScale: number, newScale: number): void;
    (event: 'onZoom', newScale: number): void;
    (event: 'beforePan', oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point): void;
    (event: 'onPan', newPan: SvgPanZoom.Point): void;
    (event: 'onUpdatedCTM', newCTM: SVGMatrix): void;
    /**
     * Emitted when svg pan zoom instance is created. Returns created instance
     */
    (event: 'created', spz: SvgPanZoom.Instance): void;
    /**
     * Emitted when svg pan zoom thumbnail is created. Returns created instance
     */
    (event: 'thumbnailCreated', spz: SvgPanZoom.Instance): void;
}
declare const _default: import("vue").DefineComponent<{
    viewportSelector: {
        type: PropType<string | HTMLElement | SVGElement>;
        default: string;
    };
    panEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlIconsEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dblClickZoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseWheelZoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventMouseEventsDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomScaleSensitivity: {
        type: NumberConstructor;
        default: number;
    };
    minZoom: {
        type: NumberConstructor;
        default: number;
    };
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    contain: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    refreshRate: {
        type: PropType<Number | "auto">;
        default: string;
    };
    customEventsHandler: {
        type: ObjectConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeZoom: (oldScale: number, newScale: number) => void;
} & {
    onZoom: (newScale: number) => void;
} & {
    beforePan: (oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point) => void;
} & {
    onPan: (newPan: SvgPanZoom.Point) => void;
} & {
    onUpdatedCTM: (newCTM: DOMMatrix) => void;
} & {
    created: (spz: SvgPanZoom.Instance) => void;
} & {
    thumbnailCreated: (spz: SvgPanZoom.Instance) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    viewportSelector: {
        type: PropType<string | HTMLElement | SVGElement>;
        default: string;
    };
    panEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlIconsEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dblClickZoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseWheelZoomEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventMouseEventsDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomScaleSensitivity: {
        type: NumberConstructor;
        default: number;
    };
    minZoom: {
        type: NumberConstructor;
        default: number;
    };
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    contain: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    refreshRate: {
        type: PropType<Number | "auto">;
        default: string;
    };
    customEventsHandler: {
        type: ObjectConstructor;
        default: null;
    };
}>> & {
    onBeforeZoom?: ((oldScale: number, newScale: number) => any) | undefined;
    onOnZoom?: ((newScale: number) => any) | undefined;
    onBeforePan?: ((oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point) => any) | undefined;
    onOnPan?: ((newPan: SvgPanZoom.Point) => any) | undefined;
    onOnUpdatedCTM?: ((newCTM: DOMMatrix) => any) | undefined;
    onCreated?: ((spz: SvgPanZoom.Instance) => any) | undefined;
    onThumbnailCreated?: ((spz: SvgPanZoom.Instance) => any) | undefined;
}, {
    viewportSelector: string | HTMLElement | SVGElement;
    panEnabled: boolean;
    controlIconsEnabled: boolean;
    zoomEnabled: boolean;
    dblClickZoomEnabled: boolean;
    mouseWheelZoomEnabled: boolean;
    preventMouseEventsDefault: boolean;
    zoomScaleSensitivity: number;
    minZoom: number;
    maxZoom: number;
    fit: boolean;
    contain: boolean;
    center: boolean;
    refreshRate: Number | "auto";
    customEventsHandler: Record<string, any>;
}>;
export default _default;
