import {IUserWord} from "./UserWord.types";
import {IExtensionSettings} from "./ExtensionSettings.types";
import {IUserVocabSelection} from "./UserVocab.types";
import {IUserVocabWord} from "./UserVocabsWord.types";
import {IWordTranslation} from "./WordTranslation.types";

// /api/vocabulary/user?langPair=en_uk
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

// /api/vocabulary/libraries/vocabs/21/select

// [PUT] /api/vocabulary/user/word
export type UpdateUserWordDTO = IUserWord

// [PUT] /api/vocabulary/user/word
export type UpdateUserWordResultDTO = {
    "userWordId": IUserWord['userWordId'],
    "isWordLearned": IUserWord['isWordLearned'],
}

// [GET] /api/vocabulary/user/word?word=free&langPair=en_uk
export type WordTranslationDTO = IWordTranslation