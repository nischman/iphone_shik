import type { IPhoneModel } from '@/shared/data/iphones';

interface ProductSpecsProps {
  specs: IPhoneModel['specs'];
}

const specIcons: Record<string, React.ReactNode> = {
  display: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  chip: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
  camera: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  battery: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12h3m6 0h3m-9 0a3 3 0 006 0m-6 0a3 3 0 106 0m6 0h3m-3 0a3 3 0 006 0m-6 0a3 3 0 106 0m-9-4h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2z"
      />
    </svg>
  ),
  weight: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
};

const specLabels: Record<string, string> = {
  display: 'Дисплей',
  chip: 'Чип',
  camera: 'Камера',
  battery: 'Батарея',
  weight: 'Вес',
};

export function ProductSpecs({ specs }: ProductSpecsProps) {
  const specEntries = Object.entries(specs) as [keyof typeof specs, string][];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Технические характеристики
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specEntries.map(([key, value]) => (
          <div
            key={key}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                {specIcons[key]}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {specLabels[key] || key}
                </h3>
                <p className="text-lg font-semibold text-foreground">{value}</p>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
