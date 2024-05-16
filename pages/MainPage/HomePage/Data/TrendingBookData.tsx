export interface TrendingBookProps {
    id: number;
    imgUrl: string;
    authorName?: string;
    bookName: string;
}
export const ListTrendingBookData: TrendingBookProps[] = [
    {
        id: 1,
        imgUrl: 'https://media.newyorker.com/photos/661560a0859cd787c3b6a58a/master/w_1000,c_limit/the%20limits.jpg',
        authorName: 'Author 1',
        bookName: 'Book 1',
    },
    {
        id: 2,
        imgUrl: 'https://media.newyorker.com/photos/661560a0de5c95a58f56e63b/master/w_1000,c_limit/cocktails%20with%20george%20and%20martha.jpg',
        authorName: 'Author 1',
        bookName: 'Book 1',
    },
    {
        id: 3,
        imgUrl: 'https://media.newyorker.com/photos/661560a01efd5aa132c7a3be/master/w_1000,c_limit/cahokia%20jazz.jpg',
        authorName: 'Author 1',
        bookName: 'Book 1',
    },
    {
        id: 4,
        imgUrl: "https://media.newyorker.com/photos/661563b2c62092a4440bdeda/master/w_1000,c_limit/the%20wide%20wide%20sea.jpg",
        authorName: 'Author 1',
        bookName: 'Book 1',
    },
    {
        id: 5,
        imgUrl: "https://assets.vogue.com/photos/65fb5a1877db5e347b4933dc/3:4/w_640,c_limit/strange%20eventful.jpg",
        authorName: 'Author 1',
        bookName: 'Book 1',
    },
    {
        id: 6,
        imgUrl: "https://assets.vogue.com/photos/65a185c3367731376015c812/3:4/w_640,c_limit/slide_9.jpg",
        authorName: 'Author 1',
        bookName: 'Book 1',
    }
]