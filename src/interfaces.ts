export interface IStories {
  status: string,
  results: IArticle[],

}

export interface IPropsToDV {
  article: IArticle,
  canClose: boolean,
  showArticle: boolean,
  setShowArticle: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IArticle {
  created_date: string,
  multimedia: IMultimedia[],
  title: string,
  byline: string,
  url: string,
  abstract: string
}

interface IMultimedia {
  url: string
}


export interface IPropsToHeadline {
  stories: IStories,
  categoryHead: string,
  setArticle: React.Dispatch<React.SetStateAction<IArticle>>,
  setShowArticle: React.Dispatch<React.SetStateAction<boolean>>
}


export interface ISearch {
  setFromSearch: any
}