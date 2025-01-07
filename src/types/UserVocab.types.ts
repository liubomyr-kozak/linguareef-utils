
export interface IUserVocabSelection {
    id: number;
    isSelected: boolean;
    vocab: {
        id: number;
        title: string;
        description: string;
        isPublic: boolean;
        updateAt: string;
    };
}