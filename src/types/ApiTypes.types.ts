import {IUserWord} from "./UserWord.types";
import {IExtensionSettings} from "./ExtensionSettings.types";
import {IUserVocabSelection} from "./UserVocab.types";
import {IUserVocabWord} from "./UserVocabsWord.types";

export type UserVocabularyDTO = {
    list: IUserWord[];
}

// /api/user/extension-settings
export type UserExtensionSettingsDTO = IExtensionSettings

// /api/vocabulary/user/selected-vocabs?langPair=en_uk
export type UserVocabSelectionDTO = IUserVocabSelection[]

// /api/vocabulary/user/selected-vocabs-words?langPair=en_uk
export type UserSelectedVocabsWordsDTO = IUserVocabWord[]

// /api/vocabulary/libraries/vocabs/current-user?langPair=en_uk
// export type UserVocabularyLibraryExtensionDTO = {
//
// }


