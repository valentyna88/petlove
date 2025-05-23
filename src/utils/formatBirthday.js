export const formatBirthday = dateStr => {
  if (!dateStr) return '';

  const [year, month, day] = dateStr.split('-');
  if (!year || !month || !day) return dateStr;
  return `${day}.${month}.${year}`;
};
