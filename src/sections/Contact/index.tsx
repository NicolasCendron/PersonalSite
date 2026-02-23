import { useState } from 'react'
import { Mail, Send, Copy, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GitHubIcon, LinkedInIcon } from '../../components/icons/BrandIcons'
import { contact } from '../../data/contact'
import { social } from '../../data/social'

export function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

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
          <div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border">
            <Mail size={20} className="text-accent flex-shrink-0" />
            <span
              data-testid="contact-email-address"
              className="text-body text-text flex-1 min-w-0 truncate"
            >
              {contact.email}
            </span>
            <div className="flex items-center gap-1 flex-shrink-0">
              <a
                data-testid="contact-email-link"
                href={`mailto:${contact.email}`}
                aria-label={t('contact.email')}
                className="p-2 rounded-md text-text-muted hover:text-accent hover:bg-surface2 transition-colors duration-fast ease-brand"
              >
                <Send size={16} />
              </a>
              <button
                data-testid="contact-email-copy"
                onClick={handleCopy}
                aria-label={t('contact.copyEmail')}
                className="relative p-2 w-8 h-8 flex items-center justify-center rounded-md text-text-muted hover:text-accent hover:bg-surface2 transition-colors duration-fast ease-brand cursor-pointer"
              >
                <Copy
                  size={16}
                  className={`absolute transition-all duration-normal ease-brand ${copied ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                />
                <Check
                  size={16}
                  className={`absolute transition-all duration-normal ease-brand text-available ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                />
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              data-testid="contact-linkedin"
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contact.linkedin')}
              className="flex-1 flex items-center justify-center gap-3 p-4 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-fast ease-brand group"
            >
              <LinkedInIcon size={20} className="text-accent" />
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
              <GitHubIcon size={20} className="text-accent" />
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
