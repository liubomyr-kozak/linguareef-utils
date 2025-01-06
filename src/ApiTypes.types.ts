import {IUserWord} from "./UserWord.types";
import {AppConfig} from "./ExtensionSettings.types";

export type UserVocabularyDTO = {
    list: IUserWord[];
}

export type UserExtensionSettingsDTO = AppConfig