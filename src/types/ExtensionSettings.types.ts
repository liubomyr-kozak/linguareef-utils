export interface ILauncherPosition {
    top: string;
    bottom: string;
    offsetTop: number;
}

export interface ILauncher {
    position: ILauncherPosition;
}

export interface ILanguageOption {
    value: string;
    label: string;
}

export interface ISettings {
    wordInteractType: string;
    appIsActive: boolean;
    launcher: ILauncher;
    langLocal: ILanguageOption;
    langLearning: ILanguageOption;
    languageInterface: ILanguageOption;
    timeZone: number;
}

export interface IExtensionSettings {
    lastSync: string;
    settings: ISettings;
    pageLanguage: string;
}