export function formatDate(date: string) {
  const formatterDate = new Date(date)
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      month: '2-digit',
      minute: 'numeric',
    })
    .replace(',', ' -');

  return formatterDate;
}
