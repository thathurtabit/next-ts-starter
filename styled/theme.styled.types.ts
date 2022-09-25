export interface ThemeStyledTypes {
    colors:       Colors;
    fonts:        Fonts;
    offset:       Offset;
    content:      Content;
    spacing:      Spacing;
    borderRadius: BorderRadius;
    transition:   Transition;
    zIndex:       ZIndex;
    breakpoints:  Breakpoints;
}

export interface BorderRadius {
    small:  string;
    medium: string;
    large:  string;
    larger: string;
}

export interface Breakpoints {
    mobilePortrait:  string;
    mobileLandscape: string;
    tabletPortrait:  string;
    tabletLandscape: string;
    laptopSmall:     string;
    navDesktop:      string;
}

export interface Colors {
    bg:              string;
    bgTransparent:   string;
    primary:         string;
    primaryHover:    string;
    primaryContrast: string;
    primaryDisabled: string;
    secondary:       string;
    focus:           string;
    text:            string;
    textAlt:         string;
    textShadow:      string;
    textBorder:      string;
    link:            string;
    linkHover:       string;
}

export interface Content {
    maxPageContentWidth: string;
    maxContentWidth:     string;
}

export interface Fonts {
    heading: string;
    body:    string;
    weight:  Weight;
}

export interface Weight {
    light:   number;
    regular: number;
    heavy:   number;
}

export interface Offset {
    mobileHeaderBar:        string;
    mobileFooterBar:        string;
    desktopHeaderFooterBar: string;
}

export interface Spacing {
    xxSmall:  string;
    xSmall:   string;
    smaller:  string;
    small:    string;
    medium:   string;
    mediumer: string;
    large:    string;
    larger:   string;
    xLarge:   string;
}

export interface Transition {
    duration: Duration;
    easing:   Easing;
}

export interface Duration {
    normal: string;
    medium: string;
    long:   string;
    longer: string;
}

export interface Easing {
    easeOut:     string;
    easeOutBack: string;
}

export interface ZIndex {
    fixed:      number;
    nav:        number;
    navOverlay: number;
    modal:      number;
    isBusy:     number;
}
