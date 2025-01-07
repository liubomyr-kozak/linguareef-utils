import {ITranslationOther} from "./WordTranslation.types";

export interface IUserVocabWord {
    word: string;
    isCommon: boolean;
    translation: string;
    wordId: number;
    translationId: number;
    translationsOther: ITranslationOther[];
    langLearning: string;
    langLocal: string;
    isVocabWord: boolean;
}