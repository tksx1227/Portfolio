import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Asia/Tokyo かつ 'YYYY-MM' のフォーマットに変換する関数
 */
export const formatDateToUTC = (date: string) => {
  const formattedDate = dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM');
  return formattedDate;
};

/**
 * 文字列を指定した文字で区切ったリストを返す関数
 */
export const plainTextToList = (str: string, delimiter = '\n') => {
  return str.trim().split(delimiter);
};
