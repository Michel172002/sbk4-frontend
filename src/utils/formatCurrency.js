export default function formatCurrency(number) {
  const [whole, decimal] = number.toFixed(2).toString().split('.');

  const wholeWithSeparator = whole.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedCurrency = `R$ ${wholeWithSeparator},${decimal}`;

  return formattedCurrency;
}
