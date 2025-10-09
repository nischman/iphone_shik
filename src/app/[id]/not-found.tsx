import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tight text-foreground">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Продукт не найден
          </h2>
          <p className="text-lg text-muted-foreground">
            К сожалению, запрашиваемый продукт не существует или был удален.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" asChild className="rounded-full">
            <Link href="/">На главную</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full border-2">
            <Link href="/catalog">В каталог</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
