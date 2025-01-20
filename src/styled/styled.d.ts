import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bodyBackground: string;
      headerText: string;
      mainText: string;
      background: string;
      reservedPlace: string;
      selectedPlace: string;
      availablePlace: string;
      calendarBackground: string;
      borderColor: string;
      chooseFilmBackground: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
