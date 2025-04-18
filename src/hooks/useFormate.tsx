export function formatCompact(value: number, decimals: number = 1): string {
    // Handle edge cases
    if (value === 0) return '0';
    if (!value) return '-';
    
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    
    const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
    
    if (tier === 0) return value.toString();
    
    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = value / scale;
    
    return scaled.toFixed(decimals).replace(/\.0+$/, '') + suffix;
  }

  export function formatWithCommas(value: number): string {
    if (value === 0) return '0';
    if (!value) return '-';
    
    return value.toLocaleString('en-US');
  }
  