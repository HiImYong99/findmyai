import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '120px',
                    fontSize: 240,
                    fontWeight: 900,
                    fontFamily: 'system-ui, sans-serif',
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.2), 0 20px 40px rgba(0,0,0,0.4)',
                }}
            >
                AI
            </div>
        ),
        { ...size }
    )
}
