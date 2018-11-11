/// <summary>
/// Splits a url fragment into its component parts
/// </summary>
/// <param name="fragment">the contents of the url fragment </param>
/// <returns>A key value dictionary of made up of the contents of the fragment</returns>
export function SplitUrlFragment(fragment): any {
  const data = {};
  if (!fragment || fragment === null) {
    return data;
  }

  const pairs = fragment.split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const separatorIndex = pair.indexOf('=');

    let escapedKey, escapedValue, key, value;

    if (separatorIndex === -1) {
      escapedKey = pair;
      escapedValue = null;
    } else {
      escapedKey = pair.substr(0, separatorIndex);
      escapedValue = pair.substr(separatorIndex + 1);
    }

    key = decodeURIComponent(escapedKey);
    value = decodeURIComponent(escapedValue);

    data[key] = value;
  }

  return data;
}
