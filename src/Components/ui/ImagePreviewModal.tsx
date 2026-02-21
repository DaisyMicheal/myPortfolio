import { X } from 'lucide-react'

type ImagePreviewModalProps = {
  isOpen: boolean
  imageSrc: string
  imageAlt?: string
  onClose: () => void
}

export default function ImagePreviewModal({
  isOpen,
  imageSrc,
  imageAlt = 'Preview image',
  onClose,
}: ImagePreviewModalProps) {
  if (!isOpen || !imageSrc) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close preview"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-6xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
          aria-label="Close preview"
        >
          <X size={18} />
        </button>

        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[85vh] w-full rounded-xl object-contain"
        />
      </div>
    </div>
  )
}

