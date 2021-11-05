export const categories: string[] = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

export const categoriesEng: string[] = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Front Page', 'Insider', 'Magazine', 'Movies', 'N.Y. Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'Times Magazine', 'Travel', 'Upshot', 'U.S.', 'World']

export const getDate = (rawDate: string) => {
  const date = rawDate.slice(0, 10);
  const wholeDate = new Date(date);
  const options: object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return wholeDate.toLocaleDateString("en-US", options)
}