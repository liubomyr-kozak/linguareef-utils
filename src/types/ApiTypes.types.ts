import {IUserWord} from "./UserWord.types";
import {IExtensionSettings} from "./ExtensionSettings.types";

export type UserVocabularyDTO = {
    list: IUserWord[];
}

export type UserExtensionSettingsDTO = IExtensionSettings