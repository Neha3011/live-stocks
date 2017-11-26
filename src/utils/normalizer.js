import isEmpty from 'is-empty';

export function normalizerTickerData(initialData, currentData) {
  if (currentData) {
    return currentData.reduce((tickerData, account) => {
      const name = account[0];
      const price = parseFloat(account[1]).toFixed(2);
      let backgroundColor = 'transparent';
      let color = '#000000';
      if (!isEmpty(initialData)) {
        const oldPrice = parseFloat(initialData[name].price).toFixed(2);
        const hasSamePrice = oldPrice === price;
        const hasPriceDecreased = oldPrice > price;
        backgroundColor = hasSamePrice ? '#e0d9d9' : (hasPriceDecreased ? '#cd201f' : '#96bf48');
        color = hasSamePrice ? '#000000' : (hasPriceDecreased ? '#ffffff' : '#ffffff');
      }

      tickerData[account[0]] = {
        name,
        price,
        color,
        backgroundColor,
        'lastUpdated': new Date()
      };

      return tickerData;
    }, {});
  }
}
