import {UserWord} from "./UserWord.types";
import {AppConfig} from "./ExtensionSettings.types";

export type UserVocabulary = {
    list: UserWord[];
}

export type UserExtensionSettings = AppConfig