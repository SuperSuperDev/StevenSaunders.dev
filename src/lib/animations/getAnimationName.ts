export default function getAnimationName(animationName: string) {
  switch (animationName) {
    case 'tracking-in-expand':
      return 'animate-tracking-in-expand';
    case 'tracking-in-contract':
      return 'animate-tracking-in-contract';
    case 'scale-in-ver-center':
      return 'animate-scale-in-ver-center';
    case 'scale-in-bl':
      return 'animate-scale-in-bl';
    case 'slide-fwd-center':
      return 'animate-slide-fwd-center';
    default:
      return 'animate-tracking-in-expand';
  }
}
