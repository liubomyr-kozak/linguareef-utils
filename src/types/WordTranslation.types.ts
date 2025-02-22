import {WordTranslationOther} from "./WordTranslationOther.types";

export interface IWordTranslation {
    word: string;
    isCommon: boolean;
    translation: string;
    wordId: number;
    translationId: number;
    translationsOther: WordTranslationOther[];
    langLearning: string;
    langLocal: string;
}
