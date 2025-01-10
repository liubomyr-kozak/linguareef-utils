import {WordTranslationOther} from "./WordTranslationOther.types";

export interface IUserVocabWord {
    word: string;
    isCommon: boolean;
    translation: string;
    wordId: number;
    translationId: number;
    translationsOther: WordTranslationOther[];
    langLearning: string;
    langLocal: string;
    isVocabWord: boolean;
}