import '../../App.css'

export interface ArtistButtonListProps {
  ariaLabel?: string
  title?: string
  size?: number
  onClick?: () => void
  tooltip?: string
  className?: string
}

export function ArtistButtonList({
  ariaLabel = 'Artist List',
  title = 'Artist List',
  onClick,
  tooltip = 'Artist List',
  className
}: ArtistButtonListProps) {
  return (
    <div className={`icon karpe ${className ?? ''}`}>
      <span className="tooltip">{tooltip}</span>
      <button className="Btn" aria-label={ariaLabel} title={title} onClick={onClick}>
        
      </button>
    </div>
  )
}