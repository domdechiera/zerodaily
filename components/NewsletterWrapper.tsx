import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function NewsletterWrapper() {
  return (
    // Pass an empty string as title to remove the "Subscribe to the newsletter" text
    <NewsletterForm title="" />
  )
}
