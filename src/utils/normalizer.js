import isEmpty from 'is-empty';

export function normalizerTickerData(initialData, currentData) {
  return currentData.reduce((tickerData, account) => {
    const name = account[0];
    const price = account[1];
    let color = 'transparent';
    if (!isEmpty(initialData)) {
      const oldPrice = initialData[name].price;
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
