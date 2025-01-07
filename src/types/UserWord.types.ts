import {ITranslationOther} from "./WordTranslation.types";
import {ITraining} from "./WordTraining.types";

export interface IUserWord {
    userWordId: number;
    isWordLearned: boolean;
    createdAt: string;
    translationsOther: ITranslationOther[];
    word: string;
    wordId: number;
    translation: string;
    translationId: number;
    training: ITraining;
}