import React from 'react'

interface SpotifyEmbedProps {
  /**
   * The Spotify track, album, playlist, or episode ID (not the full URL).
   * Example: "1NqdIs5n0p69VFcNbD7Mtl"
   */
  trackId: string
  /**
   * The type of Spotify embed (default: 'track'). Other options: 'album', 'playlist', 'episode', etc.
   * For now, we default to 'track'.
   */
  type?: 'track' | 'album' | 'playlist' | 'episode'
  /**
   * Optional: theme (0 = light, 1 = dark)
   */
  theme?: 0 | 1
  /**
   * Optional: width (default: '100%')
   */
  width?: string | number
  /**
   * Optional: height (default: 152)
   */
  height?: string | number
}

/**
 * Embeds a Spotify player for a given track, album, playlist, or episode.
 * Usage in MDX: <SpotifyEmbed trackId="1NqdIs5n0p69VFcNbD7Mtl" />
 */
const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  trackId,
  type = 'track',
  theme = 0,
  width = '100%',
  height = 152,
}) => {
  if (!trackId) return null
  // Sanitize input (basic)
  const safeType = ['track', 'album', 'playlist', 'episode'].includes(type) ? type : 'track'
  const src = `https://open.spotify.com/embed/${safeType}/${encodeURIComponent(trackId)}?utm_source=generator&theme=${theme}`

  return (
    <iframe
      style={{ borderRadius: 12 }}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      allowFullScreen
      title="Spotify Embed"
    />
  )
}

export default SpotifyEmbed
