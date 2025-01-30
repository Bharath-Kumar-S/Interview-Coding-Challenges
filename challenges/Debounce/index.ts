function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const logMessage = (message: string) => {
  console.log(message, new Date().toISOString());
};

const debouncedLog = debounce(logMessage, 5000);

// Test calls
debouncedLog("First call"); // Will log "First call" after 5000ms if not interrupted.
setTimeout(() => debouncedLog("Second call"), 3000); // Cancels "First call", schedules "Second call".
setTimeout(() => debouncedLog("Third call"), 7000); // Executes "Third call" after another 5000ms.
