import {ITraining} from "./WordTraining.types";
import {WordTranslationOther} from "./WordTranslationOther.types";

export interface IUserWord {
    userWordId: number;
    isWordLearned: boolean;
    createdAt: string;
    translationsOther: WordTranslationOther[];
    word: string;
    wordId: number;
    translation: string;
    translationId: number;
    training: ITraining;
}