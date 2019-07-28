const mapMatrixToMatrix = (source, destination, at) => {
  const [offsetX, offsetY] = at;
  const result = [...destination];
  for (let y = 0; y < source.length; y++) {
    for (let x = 0; x < source[y].length; x++) {
      result[y + offsetY][x + offsetX] = source[y][x];
    }
  }
  return result;
};

export default mapMatrixToMatrix;
