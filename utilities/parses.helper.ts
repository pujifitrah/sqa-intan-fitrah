export function Parser(identifier: string): string | undefined {
  const argv = process.argv;

  for (var i = 0; i < argv.length; i++) {
    const v = argv[i];
    const parts = v.split("=");

    if (parts[0] == identifier && parts[1]) {
      return parts[1];
    }
  }

  return undefined;
}
