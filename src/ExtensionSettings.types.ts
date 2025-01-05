export interface Position {
    top: string;
    bottom: string;
    offsetTop: number;
}

export interface Launcher {
    position: Position;
}

export interface LanguageOption {
    value: string;
    label: string;
}

export interface Settings {
    wordInteractType: string;
    appIsActive: boolean;
    launcher: Launcher;
    langLocal: LanguageOption;
    langLearning: LanguageOption;
    languageInterface: LanguageOption;
    timeZone: number;
}

export interface AppConfig {
    lastSync: string;
    settings: Settings;
    pageLanguage: string;
}