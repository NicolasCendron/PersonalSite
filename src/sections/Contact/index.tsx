import { Mail, Linkedin, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contact } from '../../data/contact'
import { social } from '../../data/social'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      data-testid="contact-section"
      aria-label={t('contact.ariaLabel')}
      className="min-h-screen flex items-center px-6 lg:px-16 py-24"
    >
      <div className="w-full max-w-2xl mx-auto">
        <h2
          data-testid="contact-heading"
          className="text-heading font-bold text-text"
        >
          {t('contact.heading')}
        </h2>

        <p
          data-testid="contact-subheading"
          className="text-body text-text-muted mt-3 leading-relaxed"
        >
          {t('contact.subheading')}
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            data-testid="contact-email"
            href={`mailto:${contact.email}`}
            aria-label={t('contact.email')}
            className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-fast ease-brand group"
          >
            <Mail size={20} className="text-accent flex-shrink-0" />
            <span className="text-body text-text group-hover:text-accent transition-colors duration-fast">
              {contact.email}
            </span>
          </a>

          <div className="flex gap-4 mt-2">
            <a
              data-testid="contact-linkedin"
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contact.linkedin')}
              className="flex-1 flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-fast ease-brand group"
            >
              <Linkedin size={20} className="text-accent" />
              <span className="text-body text-text group-hover:text-accent transition-colors duration-fast">
                LinkedIn
              </span>
            </a>

            <a
              data-testid="contact-github"
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contact.github')}
              className="flex-1 flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-fast ease-brand group"
            >
              <Github size={20} className="text-accent" />
              <span className="text-body text-text group-hover:text-accent transition-colors duration-fast">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
