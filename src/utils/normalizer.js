import isEmpty from 'is-empty';

export function normalizerTickerData(initialData, currentData) {
  return currentData.reduce((tickerData, account) => {
    const name = account[0];
    const price = parseFloat(account[1]).toFixed(2);
    let color = 'transparent';
    if (!isEmpty(initialData)) {
      const oldPrice = parseFloat(initialData[name].price).toFixed(2);
      color = (oldPrice === price) ? '#e0d9d9' : (oldPrice > price ? '#cd201f' : '#96bf48');
    }

    tickerData[account[0]] = {
      name,
      price,
      color,
      'lastUpdated': new Date()
    };

    return tickerData;
  }, {});
}
