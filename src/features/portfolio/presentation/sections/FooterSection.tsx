export function FooterSection() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 Nouradawy. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="transition-colors hover:text-magenta">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-magenta">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
