export interface IMenuItem {
    id: number,
    title:string,
    url:string,
}

export interface IButtonLink {
    text: string
    url:string
}


export interface IThemeState{
    theme: String
    
}

export interface IAction {
    type: "CHANGE_THEME"
}

export interface ISetDashboardDataAction {
  type: 'SET_DATA';
  payload: {};
};
export interface ISetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
};

export interface ISetErrorAction {
  type: 'SET_ERROR';
  payload: string;
};

export interface IClearErrorAction {
    type: 'CLEAR_ERROR';
};

export interface IDashboardState {
  data:{},
  isLoading:boolean,
  showError:boolean,
  errorMessage:string
}

export interface IPortfoilioObj {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface IPortfolioItem {
  frontend: IPortfoilioObj[];
  mobile: IPortfoilioObj[];
  uiux: IPortfoilioObj[];
  contentwriting: IPortfoilioObj[];
}