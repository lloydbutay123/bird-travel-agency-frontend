type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

export default function Modal({ children, onClose, isOpen }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-99999">
      <div
        className="absolute p-6 flex justify-center items-center inset-0 bg-black/75"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-xl w-full max-w-3xl p-6 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
