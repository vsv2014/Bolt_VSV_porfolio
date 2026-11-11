import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Prevent a failed optional chunk from taking the entire portfolio offline. */
export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo): void {
    // A user-facing fallback remains available if the chunk cannot be loaded.
    console.error('Portfolio section failed to load', error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div role="alert" className="mx-auto my-8 max-w-5xl rounded-xl border border-line bg-surface p-6 text-fg">
          <p className="font-display text-lg font-semibold">This section could not load.</p>
          <p className="mt-2 text-sm text-muted">The rest of the portfolio is still available.</p>
          <button
            type="button"
            className="mt-4 min-h-11 rounded-lg border border-line px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-brand-cyan"
            onClick={() => window.location.reload()}
          >
            Retry loading
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
