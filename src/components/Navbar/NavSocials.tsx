import { Github, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { social } from '../../data/social'

export function NavSocials() {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-4">
      <a
        data-testid="nav-github"
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('navbar.github')}
        className="text-text-muted hover:text-accent transition-colors duration-fast ease-brand"
      >
        <Github size={20} />
      </a>
      <a
        data-testid="nav-linkedin"
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('navbar.linkedin')}
        className="text-text-muted hover:text-accent transition-colors duration-fast ease-brand"
      >
        <Linkedin size={20} />
      </a>
    </div>
  )
}
