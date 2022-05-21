import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateToUTC = (date: string) => {
  const formattedDate = dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM');
  return formattedDate;
};

export const plainTextToList = (str: string) => {
  return str.trim().split('\n');
};
