export interface NewCommentType {
    name?: string;
    content?: string;
    id?: string;
    cat?: number;

}

export interface AddCommentType {
    name: string;
    content: string;
    cat: number;
}