import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Prakriti Bhudwal - Professional Hairstylist in Jammu'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Prakriti Bhudwal
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 30,
            }}
          >
            Professional Hairstylist
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 40,
            }}
          >
            Trained at BBLUNT Mumbai
          </div>
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 28,
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            <span>Bobs</span>
            <span>•</span>
            <span>Curly Hair</span>
            <span>•</span>
            <span>Crazy Colours</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
