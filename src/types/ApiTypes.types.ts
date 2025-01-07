import {IUserWord} from "./UserWord.types";
import {IExtensionSettings} from "./ExtensionSettings.types";
import {IUserVocabSelection} from "./UserVocab.types";

export type UserVocabularyDTO = {
    list: IUserWord[];
}

export type UserExtensionSettingsDTO = IExtensionSettings

export type UserSelectedVocabsWordsDTO = IUserVocabSelection[]

// /api/vocabulary/libraries/vocabs/current-user?langPair=en_uk
// export type UserVocabularyLibraryExtensionDTO = {
//
// }


// /api/vocabulary/user/selected-vocabs-words?langPair=en_uk