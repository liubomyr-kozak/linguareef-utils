export interface TranslationOther {
    pos: string;
    meanings: string[];
}

export interface Training {
    opinion: number;
    nextRepetitionDate: string;
    isTraining: boolean;
    lastAttemptQuality: number;
    level: string;
}

export interface UserWord {
    userWordId: number;
    isWordLearned: boolean;
    createdAt: string;
    translationsOther: TranslationOther[];
    word: string;
    wordId: number;
    translation: string;
    translationId: number;
    training: Training;
}