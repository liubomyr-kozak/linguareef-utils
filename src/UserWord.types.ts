export interface ITranslationOther {
    pos: string;
    meanings: string[];
}

export interface ITraining {
    opinion: number;
    nextRepetitionDate: string;
    isTraining: boolean;
    lastAttemptQuality: number;
    level: string;
}

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