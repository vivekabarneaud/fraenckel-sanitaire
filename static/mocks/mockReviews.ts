export type Review = {
  rating: number;
  content: string;
  username: string;
}

export const mockReviews: Review[] = [
  {
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    username: "Dr. Kaya Will"
  }, {
    rating: 5,
    content: "Super, du grand art",
    username: "Jean"
  },
  {
    rating: 4,
    content: "Super, du grand art",
    username: "Philou"
  }
];