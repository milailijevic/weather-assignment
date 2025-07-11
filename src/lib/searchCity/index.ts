import { getLocale } from '@lib/i18n';

export const queryParamName = 'query';
export const minQueryLength = 3;
export const getSearchPathname = (locale = getLocale()) => `/${ locale }/weather-data`;
export const getOpenSearchPathname = (locale: string) => `${ getSearchPathname(locale) }opensearch.xml`;
