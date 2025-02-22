import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://github.com/Aamir-Hullur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aamir-hullur/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            {/* <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <SiX className="w-6 h-6" />
            </a> */}
          </div>
          <p className="text-foreground/60">© 2025 Aamir Hullur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
