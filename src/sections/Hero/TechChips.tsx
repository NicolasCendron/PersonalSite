const PLATFORM_CHIPS = ['WebSockets', 'WebAssembly', 'Canvas', 'IndexedDB', 'BFF', 'Docker']
const FRAMEWORK_CHIPS = ['React', 'Angular', 'Vue', 'TypeScript']

function Chip({ label }: { label: string }) {
  return (
    <li
      data-testid={`chip-${label}`}
      className="px-3 py-1 rounded-full bg-surface2 text-caption text-text-muted border border-border"
    >
      {label}
    </li>
  )
}

export function TechChips() {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <ul data-testid="tech-chips-platform" className="flex flex-wrap gap-2">
        {PLATFORM_CHIPS.map((label) => (
          <Chip key={label} label={label} />
        ))}
      </ul>
      <ul data-testid="tech-chips-frameworks" className="flex flex-wrap gap-2">
        {FRAMEWORK_CHIPS.map((label) => (
          <Chip key={label} label={label} />
        ))}
      </ul>
    </div>
  )
}
