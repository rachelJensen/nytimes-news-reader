export interface IStories {
  status: string
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

