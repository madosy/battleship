export default function convertToCoordinate(row, column) {
  let alphabet = "abcdefghij".split("");
  return `${alphabet[Number.parseInt(row)]}` + Number.parseInt(column);
}
