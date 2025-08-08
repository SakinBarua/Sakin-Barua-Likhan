import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/sakinlikhan", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sakinlikhan", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/sakinlikhan", label: "Twitter" },
    { icon: Mail, href: "mailto:sakin@example.com", label: "Email" }
  ];

  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Sakin Barua Likhan. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}