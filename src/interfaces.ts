export interface IStories {
  status: string,
  results: IArticle[],

}

export interface IPropsToDV {
  article: IArticle,
  canClose: boolean,
  showArticle: any,
  setShowArticle: any
}

export interface IArticle {
  created_date: string,
  multimedia: IMultimedia[],
  title: string,
  byline: string,
  url: string,
  abstract: string
}

export interface IMultimedia {
  url: string
}


export interface IPropsToHeadline {
  stories: IStories,
  categoryHead: string,
  setArticle: any,
  setShowArticle: any
}
