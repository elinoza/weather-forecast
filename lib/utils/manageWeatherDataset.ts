export function getMaxTemp(array: any) {
  const firstMaxTemp = array[0].main.temp_max;
  const maxTemp = array.reduce(
    (acc: any, curr: any) => Math.max(acc, curr.main.temp_max),
    firstMaxTemp
  );
  return maxTemp;
}

export function getMinTemp(array: any) {
  const firstMinTemp = array[0].main.temp_min;
  const minTemp = array.reduce(
    (acc: any, curr: any) => Math.min(acc, curr.main.temp_min),
    firstMinTemp
  );
  return minTemp;
}
