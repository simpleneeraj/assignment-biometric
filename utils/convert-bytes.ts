function formatBytes(a: number, b: number = 2): string {
  if (!+a) return '0 Bytes';

  const c = 0 > b ? 0 : b;
  const d = Math.floor(Math.log(a) / Math.log(1024));

  return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
    ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'][d]
  }`;
}
export default formatBytes;

// // Example usage:
// const sizeInBytes = 5242880; // 5 megabytes in bytes
// const formattedSize = formatBytes(sizeInBytes);
// console.log(formattedSize); // Output: "5 MiB"
