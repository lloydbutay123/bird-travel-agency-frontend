type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Container({
  children,
  className,
  style,
}: ContainerProps) {
  return (
    <div className={`w-full max-w-308 mx-auto ${className}`} style={style}>
      {children}
    </div>
  );
}
