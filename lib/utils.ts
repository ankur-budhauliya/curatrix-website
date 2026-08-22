type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null } | ClassValue[];

/**
 * Utility function to combine class names cleanly without external dependencies.
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  function process(item: ClassValue): void {
    if (!item) return;

    if (typeof item === 'string' || typeof item === 'number') {
      classes.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(process);
    } else if (typeof item === 'object') {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key) && item[key]) {
          classes.push(key);
        }
      }
    }
  }

  inputs.forEach(process);
  return classes.join(' ').replace(/\s+/g, ' ').trim();
}
