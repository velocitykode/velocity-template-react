import { AppLogo, Button, ThemeToggle } from '@/components/ui';
import { usePageTitle } from '@/hooks/use-page-title';
import { Link } from '@inertiajs/react';
import { ArrowLeft, House } from 'lucide-react';

export default function ErrorPage({
  status,
  message,
}: {
  status: number;
  message: string;
}) {
  usePageTitle(`${status} ${message}`);

  return (
    <div className="min-h-screen bg-bg text-fg flex flex-col">
      {/* Top bar */}
      <header className="flex h-12 items-center justify-between border-b border-border px-4 sm:px-5 lg:px-6">
        <AppLogo variant="full" size="md" href="/" />
        <ThemeToggle />
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-5 lg:px-6">
        <div className="w-full max-w-3xl">
          <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
            {status}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] lg:text-[17px] leading-relaxed text-muted">
            {message}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/">
              <Button size="lg" iconLeft={House} fullWidth>
                Go home
              </Button>
            </Link>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              iconLeft={ArrowLeft}
              onClick={() => window.history.back()}
            >
              Go back
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
