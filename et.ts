let isLoading: boolean = false;

function toggleLoadingState(): void {
  isLoading = !isLoading;
  console.log(`Loading state is now: ${isLoading}`);
}

// Usage
toggleLoadingState(); // This will change the loading state to true and log the state.
