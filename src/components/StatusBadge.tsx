interface StatusBadgeProps {
  label: string
}

export function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <span className="status-badge" role="status" aria-label={label}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  )
}
