import { WhatsunityCinematicHero } from "./WhatsunityCinematicHero";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
  onOpenCatalog: () => void;
  onOpenPresentation: () => void;
}

export function WhatsunityHero({
  locale,
  content,
  onOpenCatalog,
  onOpenPresentation,
}: Props) {
  return (
    <WhatsunityCinematicHero
      locale={locale}
      content={content}
      onOpenCatalog={onOpenCatalog}
      onOpenPresentation={onOpenPresentation}
    />
  );
}
