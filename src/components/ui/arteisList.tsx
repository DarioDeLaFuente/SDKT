import '../../App.css'


export function ArtistList() {
  return (
    <div className="card mt-2">
          
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/artist/3X23gpg1vPacr0hBARyxtN?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

      
    </div>
  )
}